#Flaskとrender_template（HTMLを表示させるための関数）をインポート
from flask import Flask,render_template
from flask_httpauth import HTTPBasicAuth
import os
#Flaskオブジェクトの生成
app = Flask(__name__)
auth = HTTPBasicAuth()

# 認証
# パスワード部分は年度ごとに変更
users = {
    "kiisnw¥pcc": "wln1033kmckw",  
}

@auth.get_password
def get_pw(username):
    if username in users:
        return users.get(username)
    return None

#「/」へアクセスがあった場合に、"Hello World"の文字列を返す
@app.route("/")
def hello():
    return "Hello World"


#「/index」へアクセスがあった場合に、「index.html」を返す
@app.route("/index")
def index():
    return render_template("index.html")

#「/pc_info」へアクセスがあった場合に、「pc_info.html」を返す  
@app.route("/pc_info")
def pc_info():
    return render_template("pc_info.html")

#「/nw_info」へアクセスがあった場合に、「nw_info.html」を返す  
@app.route("/nw_info")
def nw_info():
    return render_template("nw_info.html")

#「/school_info」へアクセスがあった場合に、「school_info.html」を返す  
@app.route("/school_info")
def school_info():
    return render_template("school_info.html")

#「/install_office」へアクセスがあった場合に、「install_std.html」の文字列を返す
@app.route("/install_office")
def office_std():
    content = "Office"
    office_url = "OfficeURL"
    return render_template("install_std.html", content=content,office_url=office_url)

#「/install_virusbuster」へアクセスがあった場合に、「install_std.html」の文字列を返す
@app.route("/install_virusbuster")
def virusbuster_std():
    content = "ウイルスバスター"
    virus_url = "VirusBusterURL"
    return render_template("install_std.html", content=content,virus_url=virus_url)

#「/office_pcc」へアクセスがあった場合に、「office_pcc.html」の文字列を返す
@app.route("/office_pcc")
@auth.login_required
def office_pcc():
    return render_template("office_pcc.html")

#「/virusbuster_pcc」へアクセスがあった場合に、「virusbuster_pcc.html」の文字列を返す
@app.route("/virusbuster_pcc")
@auth.login_required
def virusbuster_pcc():
    return render_template("virusbuster_pcc.html")

#「/setup」へアクセスがあった場合に、「setup.html」の文字列を返す
@app.route("/setup")
def setup():
    return render_template("setup.html")



if __name__ == '__main__':
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))