import http.server
import socketserver
import os

os.chdir("./build")

PORT: int = 5500

try:
    handler = http.server.SimpleHTTPRequestHandler
    with socketserver.TCPServer(("", PORT), handler) as httpd:
        print(f"Server running at http://localhost:{PORT}")
        httpd.serve_forever()
except KeyboardInterrupt:
    print("Server Stopped . . .")
