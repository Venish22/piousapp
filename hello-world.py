# hello-world.py
from http.server import BaseHTTPRequestHandler, HTTPServer

class HelloWorldHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()
        self.wfile.write(b"Hello, World!")

def run():
    server_address = ('', 8080)
    httpd = HTTPServer(server_address, HelloWorldHandler)
    print("Server running on port 8080...")
    httpd.serve_forever()

if __name__ == '__main__':
    run()
