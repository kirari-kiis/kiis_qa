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

#「/qalist」へアクセスがあった場合に、「qalist.html」を返す  
@app.route("/qalist")
def qalist():
    return render_template("qalist.html")

#「/faq」へアクセスがあった場合に、「faq.html」を返す  
@app.route("/faq")
def faq():
    return render_template("faq.html")

#「/nw_info」へアクセスがあった場合に、「nw_info.html」を返す  
@app.route("/nw_info")
def nw_info():
    return render_template("nw_info.html")

# 「/kiisnw」へアクセスがあった場合に、「kiisnw.html」を返す
@app.route("/kiisnw")
def kiisnw():
    return render_template("kiisnw.html")

#「/install_std」へアクセスがあった場合に、「install_std.html」の文字列を返す
@app.route("/install_std")
def install_std():
    return render_template("install_std.html")
    # content = "Office"
    # office_url = "OfficeURL"
    # return render_template("install_std.html", content=content,office_url=office_url)
#「/office_id」へアクセスがあった場合に、「office_id.html」の文字列を返す
@app.route("/office_id")
def office_id():
    return render_template("office_id.html")


# #「/install_virusbuster」へアクセスがあった場合に、「install_std.html」の文字列を返す
# @app.route("/install_virusbuster")
# def virusbuster_std():
#     content = "ウイルスバスター"
#     virus_url = "VirusBusterURL"
#     return render_template("install_std.html", content=content,virus_url=virus_url)

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

#「/share」へアクセスがあった場合に、「share.html」の文字列を返す
@app.route("/share")
def share():
    return render_template("share.html")

#「/nwdrive」へアクセスがあった場合に、「nwdrive.html」の文字列を返す
@app.route("/nwdrive")
def nwdrive():
    return render_template("nwdrive.html")


#「/nw_password」へアクセスがあった場合に、「nw_password.html」の文字列を返す
@app.route("/nw_password")
def nw_password():
    return render_template("nw_password.html")

#「/nw_miss」へアクセスがあった場合に、「nw_miss.html」の文字列を返す
@app.route("/nw_miss")
def nw_miss():
    return render_template("nw_miss.html")


#「/wifi_win」へアクセスがあった場合に、「wifi_win.html」の文字列を返す
@app.route("/wifi_win")
def wifi_win():
    return render_template("wifi_win.html")

#「/wifi_mac」へアクセスがあった場合に、「wifi_mac.html」の文字列を返す
@app.route("/wifi_mac")
def wifi_mac():
    return render_template("wifi_mac.html")

#「/wifi_ios」へアクセスがあった場合に、「wifi_ios.html」の文字列を返す
@app.route("/wifi_ios")
def wifi_ios():
    return render_template("wifi_ios.html")

#「/wifi_android」へアクセスがあった場合に、「wifi_android.html」の文字列を返す
@app.route("/wifi_android")
def wifi_android():
    return render_template("wifi_android.html")

#「/outlook」へアクセスがあった場合に、「outlook.html」の文字列を返す
@app.route("/outlook")
def outlook():
    return render_template("outlook.html")

#「/webmail」へアクセスがあった場合に、「webmail.html」の文字列を返す
@app.route("/webmail")
def webmail():
    return render_template("webmail.html")

#「/gsuite」へアクセスがあった場合に、「gsuite.html」の文字列を返す
@app.route("/gsuite")
def gsuite():
    return render_template("gsuite.html")

#「/virus」へアクセスがあった場合に、「virus.html」の文字列を返す
@app.route("/virus")
def virus():
    return render_template("virus.html")

# linebotの画像用ページ
@app.route("/line_image")
def line_image():
    return render_template("line_image.html")

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))