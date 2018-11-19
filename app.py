from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
  return render_template("index.html")

texts = ["One", "Two", "Three"]

@app.route("/first")
def first():
  return texts[0]

@app.route("/second")
def second():
  return texts[1]

@app.route("/third")
def third():
  return texts[2]


if __name__ == "__main__":
  app.run(host="0.0.0.0", port=8000, debug=True)