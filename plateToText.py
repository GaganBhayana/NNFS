from PIL import Image
import pytesseract
pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files (x86)\Tesseract-OCR\tesseract.exe"
import cv2


# load the image and convert it to grayscale
image = cv2.imread('./image.png')

cv2.imshow("Original", image)
'''
#print(pytesseract.image_to_string(Image.open('image.png')).encode("utf-8"))
# Apply an "average" blur to the image
blurred = cv2.blur(image, (3,3))
cv2.imshow("Blurred_image", blurred)
img = Image.fromarray(blurred)
text = pytesseract.image_to_string(img, lang='eng')
print (text)#.encode("utf8"))
#print("".join(map(chr, text)))
#print(str(text, 'utf-8'))
'''
print(pytesseract.image_to_string(Image.fromarray(image)))

cv2.waitKey(0)