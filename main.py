from datetime import time
import os
import random
import string
import fitz
import json
from flask import Flask, request, Response
from flask.helpers import url_for
from flask.json import jsonify
from flask.templating import render_template
# from flask_cors import CORS
app = Flask(__name__)
fileBasePath = os.path.join(os.path.abspath('.'), 'static/images/')
app.config['static_folder'] = fileBasePath
app.config['CORS_HEADERS'] = 'Content-Type'
# CORS(app)
if not (os.path.exists(fileBasePath)):
    os.mkdir(fileBasePath)


def getPDFInfo(stream=None):
    pdf_file: fitz.Document = fitz.open(stream=stream, filetype='x.pdf')
    allPages = []
    totalPageCount = len(pdf_file)
    totalImagesCount = 0
    totalLinksCount = 0
    folderName = ''.join(random.SystemRandom().choice(
        string.ascii_uppercase + string.digits) for _ in range(5))
    if not (os.path.exists(os.path.join(fileBasePath, folderName))):
        os.mkdir(os.path.join(fileBasePath, folderName))

    for pageIndex in range(totalPageCount):
        page = pdf_file[pageIndex]
        pageSize = [*page.bound()]
        pageFonts = page.get_fonts()
        pageLinks = []
        for i in page.links():
            if 'uri' not in i.keys():
                continue
            pageLinks.append({'uri': i['uri']})
        pageText = page.get_text()
        pageImages = []
        images = page.get_images()
        totalLinksCount += len(pageLinks)
        totalImagesCount += len(images)
        for image_index, img in enumerate(images):
            xref = img[0]
            base_image = pdf_file.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            imgs = open(os.path.join(fileBasePath, folderName,
                                     f'image{xref}.{image_ext}'), 'wb+')
            imgs.write(image_bytes)
            imgs.close()
            pageImages.append(
                {"uri": f'{request.host_url}static/images/{folderName}/image{xref}.{image_ext}', 'ext': image_ext})
        allPages.append({
            "page_size": pageSize,
            "page_fonts": pageFonts,
            "page_links": pageLinks,
            "page_text": pageText,
            "page_images": pageImages,
            "images_count": len(images),
        })

    return {
        "total_page": totalPageCount,
        "total_images": totalImagesCount,
        "total_links": totalLinksCount,
        "all_pages": allPages
    }

    # for pageIndex in range(totalPageCount):
    #     page = pdf_file[pageIndex]

# for page_index in range(len(pdf_file)):

#     # get the page itself
#     page = pdf_file[page_index]
#     image_list = page.get_images()
#     pageText = page
#     # print(dir(page))
#     print(page.language)
#     # printing number of images found in this page
#     # if image_list:
#     #     print(
#     #         f"[+] Found a total of {len(image_list)} images in page {page_index}")
#     # else:
#     #     print("[!] No images found on page", page_index)
#     # for image_index, img in enumerate(page.getImageList()):

#     #     # get the XREF of the image
#     #     xref = img[0]

#     #     # extract the image bytes
#     #     base_image = pdf_file.extract_image(xref)
#     #     image_bytes = base_image["image"]

#     #     # get the image extension
#     #     image_ext = base_image["ext"]
#     #     # imgs = open(f'image{xref}.{image_ext}', 'wb+')
#     #     # imgs.write(image_bytes)
#     #     # imgs.close()
#     #     print(xref, image_ext)


@app.route('/getjson', methods=['POST'])
def getFile():
    reqFile = request.files.get('pdf').stream.read()
    try:
        pdfInfo = getPDFInfo(reqFile)

        print(request.files.get('pdf'))
        response = jsonify(status=200, data={**pdfInfo})
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response
    except Exception as e:
        return jsonify(status=500, error=True, messages=e.args)


@app.route('/', methods=["GET"])
def Home():

    return render_template('index.html')


if __name__ == '__main__':
    PORT = 2000
    if (not os.environ['PORT']):
        PORT = os.environ['PORT']

    app.run(port=PORT, debug=False)
