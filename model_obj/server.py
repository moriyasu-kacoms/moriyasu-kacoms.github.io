# simple https server

# generate a self-signed ssl certificate without passphrase for development
# > openssl req -nodes -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365
# on windows use
# > winpty openssl req -nodes -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365

# see https://blog.anvileight.com/posts/simple-python-http-server/#python-3-x-1

from http.server import HTTPServer, SimpleHTTPRequestHandler
import ssl
import os


bp = os.path.dirname(os.path.realpath(__file__))
key = os.path.join(bp, "key.pem")
cert = os.path.join(bp, "cert.pem")

handler = SimpleHTTPRequestHandler
handler.extensions_map.update({".js": "application/javascript", })

#httpd = HTTPServer(('192.168.11.11', 4443), handler)
httpd = HTTPServer(('0.0.0.0', 4443), handler)

print("foo")

httpd.socket = ssl.wrap_socket(httpd.socket,
                               keyfile=key,
                               certfile=cert, 
                               server_side=True)

print("bar")

httpd.serve_forever()

print("baz")

