#Flaskとrender_template（HTMLを表示させるための関数）をインポート
from flask import Flask,render_template
from flask_httpauth import HTTPBasicAuth
# import os
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

#「/office」へアクセスがあった場合に、「office_std.html」の文字列を返す
@app.route("/office")
def office_std():
    return render_template("office_std.html")

#「/office_pcc」へアクセスがあった場合に、「office_pcc.html」の文字列を返す
@app.route("/office_pcc")
@auth.login_required
def office_pcc():
    return render_template("office_pcc.html")




if __name__ == "__main__":
    app.run(host='0.0.0.0', port=port)