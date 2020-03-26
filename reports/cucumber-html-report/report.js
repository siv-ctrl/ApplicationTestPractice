$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/main/resources/feature/Testcase.feature");
formatter.feature({
  "line": 2,
  "name": "Test Practice Website",
  "description": "",
  "id": "test-practice-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TestPractice"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "LoginAndLogout_Test",
  "id": "test-practice-website;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC01_TestPractice"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user open the TestPractice Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the user open the My Account Page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the user login using \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on the login button user navigate to next page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click on the logout button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "closing the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "test-practice-website;;",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "password"
      ],
      "line": 14,
      "id": "test-practice-website;;;1"
    },
    {
      "cells": [
        "vmcube1@gmail.com",
        "",
        "REyansh123$"
      ],
      "line": 15,
      "id": "test-practice-website;;;2"
    },
    {
      "cells": [
        "vmcube2@gmail.com",
        "",
        "REyansh123$$"
      ],
      "line": 16,
      "id": "test-practice-website;;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "",
  "description": "LoginAndLogout_Test",
  "id": "test-practice-website;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestPractice"
    },
    {
      "line": 3,
      "name": "@TC01_TestPractice"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user open the TestPractice Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the user open the My Account Page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the user login using vmcube1@gmail.com and REyansh123$",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on the login button user navigate to next page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click on the logout button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "closing the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "TestPractice_LoginAndLogout.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 9411999363,
  "status": "passed"
});
formatter.match({
  "location": "TestPractice_LoginAndLogout.the_user_open_the_TestPractice_Home_Page()"
});
formatter.result({
  "duration": 17153183298,
  "status": "passed"
});
formatter.match({
  "location": "TestPractice_LoginAndLogout.the_user_open_the_My_Account_Page()"
});
formatter.result({
  "duration": 10839557546,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vmcube1@gmail.com",
      "offset": 21
    },
    {
      "val": "REyansh123$",
      "offset": 43
    }
  ],
  "location": "TestPractice_LoginAndLogout.the_user_login_using_username_and_password(String,String)"
});
formatter.result({
  "duration": 556213431,
  "status": "passed"
});
formatter.match({
  "location": "TestPractice_LoginAndLogout.click_on_the_login_button_user_navgate_to_next_page()"
});
formatter.result({
  "duration": 11538901752,
  "status": "passed"
});
formatter.match({
  "location": "TestPractice_LoginAndLogout.click_on_the_logout_button()"
});
formatter.result({
  "duration": 12272531323,
  "status": "passed"
});
formatter.match({
  "location": "TestPractice_LoginAndLogout.closing_the_browser()"
});
formatter.result({
  "duration": 2431902039,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "",
  "description": "LoginAndLogout_Test",
  "id": "test-practice-website;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestPractice"
    },
    {
      "line": 3,
      "name": "@TC01_TestPractice"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user open the TestPractice Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the user open the My Account Page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the user login using vmcube2@gmail.com and REyansh123$$",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on the login button user navigate to next page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click on the logout button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "closing the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "TestPractice_LoginAndLogout.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 5542817770,
  "status": "passed"
});
formatter.match({
  "location": "TestPractice_LoginAndLogout.the_user_open_the_TestPractice_Home_Page()"
});
formatter.result({
  "duration": 16250551485,
  "status": "passed"
});
formatter.match({
  "location": "TestPractice_LoginAndLogout.the_user_open_the_My_Account_Page()"
});
formatter.result({
  "duration": 12938943424,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vmcube2@gmail.com",
      "offset": 21
    },
    {
      "val": "REyansh123$$",
      "offset": 43
    }
  ],
  "location": "TestPractice_LoginAndLogout.the_user_login_using_username_and_password(String,String)"
});
formatter.result({
  "duration": 740349219,
  "status": "passed"
});
formatter.match({
  "location": "TestPractice_LoginAndLogout.click_on_the_login_button_user_navgate_to_next_page()"
});
formatter.result({
  "duration": 11022712727,
  "status": "passed"
});
formatter.match({
  "location": "TestPractice_LoginAndLogout.click_on_the_logout_button()"
});
formatter.result({
  "duration": 13246543055,
  "status": "passed"
});
formatter.match({
  "location": "TestPractice_LoginAndLogout.closing_the_browser()"
});
formatter.result({
  "duration": 2496751413,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "",
  "description": "Login_Test",
  "id": "test-practice-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@TC02_TestPractice"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "the user1 launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "the user1 open the TestPractice Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "the user1 open the My Account Page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "the user1 login using username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "click on the login button user1 navigate to next page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "closes the browser1",
  "keyword": "Then "
});
formatter.match({
  "location": "TestPractice_Login_Test.the_user1_launch_the_chrome_application()"
});
formatter.result({
  "duration": 6225436011,
  "status": "passed"
});
formatter.match({
  "location": "TestPractice_Login_Test.the_user1_open_the_TestPractice_Home_Page()"
});
formatter.result({
  "duration": 15328165030,
  "status": "passed"
});
formatter.match({
  "location": "TestPractice_Login_Test.the_user1_open_the_My_Account_Page()"
});
formatter.result({
  "duration": 9189743912,
  "status": "passed"
});
formatter.match({
  "location": "TestPractice_Login_Test.the_user1_login_using_username_and_password()"
});
formatter.result({
  "duration": 887766095,
  "status": "passed"
});
formatter.match({
  "location": "TestPractice_Login_Test.click_on_the_login_button_user1_navgate_to_next_page()"
});
formatter.result({
  "duration": 5825475202,
  "status": "passed"
});
formatter.match({
  "location": "TestPractice_Login_Test.closes_the_browser1()"
});
formatter.result({
  "duration": 2344677931,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "",
  "description": "Shop_android",
  "id": "test-practice-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@TC03_TestPractice"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "the user1 has to launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the user1 opens the TestPractice Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "the user1 opens the My Account Page",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "the user1 logins using username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "click on the login button then user1 navigate to next page",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "the user1 open the Shop page",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "the user1 click on the android",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "the user1 click on the android mobile",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "the user1 check stock is available or not",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "it will close the browser2",
  "keyword": "Then "
});
formatter.match({
  "location": "Shop_Android_Test.the_user1_launch_the_chrome_application()"
});
formatter.result({
  "duration": 3851389880,
  "status": "passed"
});
formatter.match({
  "location": "Shop_Android_Test.the_user1_open_the_TestPractice_Home_Page()"
});
formatter.result({
  "duration": 11916377447,
  "status": "passed"
});
formatter.match({
  "location": "Shop_Android_Test.the_user1_open_the_My_Account_Page()"
});
formatter.result({
  "duration": 6602411989,
  "status": "passed"
});
formatter.match({
  "location": "Shop_Android_Test.the_user1_login_using_username_and_password()"
});
formatter.result({
  "duration": 557750658,
  "status": "passed"
});
formatter.match({
  "location": "Shop_Android_Test.click_on_the_login_button_user1_navgate_to_next_page()"
});
formatter.result({
  "duration": 11657361581,
  "status": "passed"
});
formatter.match({
  "location": "Shop_Android_Test.the_user1_open_the_Shop_page()"
});
formatter.result({
  "duration": 18214668997,
  "status": "passed"
});
formatter.match({
  "location": "Shop_Android_Test.the_user1_click_on_the_android()"
});
formatter.result({
  "duration": 8535258270,
  "status": "passed"
});
formatter.match({
  "location": "Shop_Android_Test.the_user1_click_on_the_android_mobile()"
});
formatter.result({
  "duration": 17824797075,
  "status": "passed"
});
formatter.match({
  "location": "Shop_Android_Test.the_user1_check_stock_is_available_or_not()"
});
formatter.result({
  "duration": 114762438,
  "status": "passed"
});
formatter.match({
  "location": "Shop_Android_Test.it_will_close_the_browser2()"
});
formatter.result({
  "duration": 2186933861,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "",
  "description": "shop HTML",
  "id": "test-practice-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 39,
      "name": "@TC04_TestPractice"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "first user1 has to launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "the user1 opened the TestPractice Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "the user1 opened the My Account Page",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "the user1 logined using username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "click on the login button user1 navigates to next page",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "the user1 click the Shop page",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "the user1 click on the HTML and Add to Basket",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "browser should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "Shop_HTML_Test.first_user1_launch_the_chrome_application()"
});
formatter.result({
  "duration": 7038965500,
  "status": "passed"
});
formatter.match({
  "location": "Shop_HTML_Test.the_user1_opened_the_TestPractice_Home_Page()"
});
formatter.result({
  "duration": 13573553346,
  "status": "passed"
});
formatter.match({
  "location": "Shop_HTML_Test.the_user1_opened_the_My_Account_Page()"
});
formatter.result({
  "duration": 28007908189,
  "status": "passed"
});
formatter.match({
  "location": "Shop_HTML_Test.the_user1_logined_using_username_and_password()"
});
formatter.result({
  "duration": 1001581295,
  "status": "passed"
});
formatter.match({
  "location": "Shop_HTML_Test.click_on_the_login_button_user1_navgates_to_next_page()"
});
formatter.result({
  "duration": 10006320904,
  "status": "passed"
});
formatter.match({
  "location": "Shop_HTML_Test.the_user1_click_the_Shop_page()"
});
formatter.result({
  "duration": 10931239315,
  "status": "passed"
});
formatter.match({
  "location": "Shop_HTML_Test.the_user1_click_on_the_HTML_and_Add_to_Basket()"
});
formatter.result({
  "duration": 8136311868,
  "status": "passed"
});
formatter.match({
  "location": "Shop_HTML_Test.browser_should_be_closed()"
});
formatter.result({
  "duration": 2589065530,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "",
  "description": "Incorrect Password",
  "id": "test-practice-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 50,
      "name": "@TC05_TestPractice"
    }
  ]
});
formatter.step({
  "line": 53,
  "name": "the user1 launches the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "the user1 open TestPractice Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "the user1 opens My Account Page",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "the user1 try to login using incorrect username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "click on the login button",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "application shows an error msg",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "chrome browser should be closed.",
  "keyword": "Then "
});
formatter.match({
  "location": "TesPractice_IncorrectLogin_Test.the_user1_launches_the_chrome_application()"
});
formatter.result({
  "duration": 4834482083,
  "status": "passed"
});
formatter.match({
  "location": "TesPractice_IncorrectLogin_Test.the_user1_open_the_TestPractice_Home_Page()"
});
formatter.result({
  "duration": 13247371353,
  "status": "passed"
});
formatter.match({
  "location": "TesPractice_IncorrectLogin_Test.the_user1_opens_My_Account_Page()"
});
formatter.result({
  "duration": 7954975005,
  "status": "passed"
});
formatter.match({
  "location": "TesPractice_IncorrectLogin_Test.the_user1_trry_to_login_using_incorrect_username_and_password()"
});
formatter.result({
  "duration": 665678784,
  "status": "passed"
});
formatter.match({
  "location": "TesPractice_IncorrectLogin_Test.click_on_the_login_button()"
});
formatter.result({
  "duration": 5325337009,
  "status": "passed"
});
formatter.match({
  "location": "TesPractice_IncorrectLogin_Test.application_shows_an_error_msg()"
});
formatter.result({
  "duration": 237263640,
  "status": "passed"
});
formatter.match({
  "location": "TesPractice_IncorrectLogin_Test.chrome_browser_should_be_closed()"
});
formatter.result({
  "duration": 2393941961,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "",
  "description": "Without Password",
  "id": "test-practice-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 60,
      "name": "@TC06_TestPractice"
    }
  ]
});
formatter.step({
  "line": 63,
  "name": "the user1 launches chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 64,
  "name": "the user1 opens TestPractice Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "the user1 open My Account Page",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "the user1 try to login using username and without password",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "click on the login button1",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "application will show an error msg",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "the opened chrome browser will be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "WithoutPasswordTest.the_user1_launches_chrome_application()"
});
formatter.result({
  "duration": 4162826377,
  "status": "passed"
});
formatter.match({
  "location": "WithoutPasswordTest.the_user1_opens_TestPractice_Home_Page()"
});
formatter.result({
  "duration": 11460316584,
  "status": "passed"
});
formatter.match({
  "location": "WithoutPasswordTest.the_user1_open_My_Account_Page()"
});
formatter.result({
  "duration": 11683361399,
  "status": "passed"
});
formatter.match({
  "location": "WithoutPasswordTest.the_user1_try_to_login_using_username_and_without_password()"
});
formatter.result({
  "duration": 406816086,
  "status": "passed"
});
formatter.match({
  "location": "WithoutPasswordTest.click_on_the_login_button1()"
});
formatter.result({
  "duration": 10317577709,
  "status": "passed"
});
formatter.match({
  "location": "WithoutPasswordTest.application_will_show_an_error_msg()"
});
formatter.result({
  "duration": 47286555,
  "status": "passed"
});
formatter.match({
  "location": "WithoutPasswordTest.the_opened_chrome_browser_will_be_closed()"
});
formatter.result({
  "duration": 2374843197,
  "status": "passed"
});
formatter.scenario({
  "line": 71,
  "name": "",
  "description": "Empty username",
  "id": "test-practice-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 70,
      "name": "@TC07_TestPractice"
    }
  ]
});
formatter.step({
  "line": 73,
  "name": "the user launches chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "the user opens TestPractice Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "the user open My Account Page",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "the user try to login using valid password and empty username",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "click on the login button2",
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "application will show an error message",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "closed the browser6",
  "keyword": "Then "
});
formatter.match({
  "location": "WithoutUsernameTest.the_user_launches_chrome_application()"
});
formatter.result({
  "duration": 6063200908,
  "status": "passed"
});
formatter.match({
  "location": "WithoutUsernameTest.the_user_opens_TestPractice_Home_Page()"
});
formatter.result({
  "duration": 15177317309,
  "status": "passed"
});
formatter.match({
  "location": "WithoutUsernameTest.the_user_open_My_Account_Page()"
});
formatter.result({
  "duration": 8997401729,
  "status": "passed"
});
formatter.match({
  "location": "WithoutUsernameTest.the_user_try_to_login_using_valid_password_and_empty_username()"
});
formatter.result({
  "duration": 479055107,
  "status": "passed"
});
formatter.match({
  "location": "WithoutUsernameTest.click_on_the_login_button1()"
});
formatter.result({
  "duration": 4473638656,
  "status": "passed"
});
formatter.match({
  "location": "WithoutUsernameTest.application_will_show_an_error_message()"
});
formatter.result({
  "duration": 67884042,
  "status": "passed"
});
formatter.match({
  "location": "WithoutUsernameTest.closed_the_browser6()"
});
formatter.result({
  "duration": 2443339477,
  "status": "passed"
});
formatter.scenario({
  "line": 96,
  "name": "",
  "description": "Rating and Review",
  "id": "test-practice-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 95,
      "name": "@TC09_TestPractice"
    }
  ]
});
formatter.step({
  "line": 98,
  "name": "the user first launched the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 99,
  "name": "the user first opened TestPractice Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 100,
  "name": "click on the Selenium WebDriver Recepies in Ruby",
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "click on the reviews",
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "click on rating",
  "keyword": "Then "
});
formatter.step({
  "line": 103,
  "name": "enter your review",
  "keyword": "Then "
});
formatter.step({
  "line": 104,
  "name": "close the opened browser8",
  "keyword": "Then "
});
formatter.match({
  "location": "Review_Test.the_user_first_launched_the_chrome_application()"
});
formatter.result({
  "duration": 4452556000,
  "status": "passed"
});
formatter.match({
  "location": "Review_Test.the_user_first_opened_TestPractice_Home_Page()"
});
formatter.result({
  "duration": 14368807663,
  "status": "passed"
});
formatter.match({
  "location": "Review_Test.click_on_the_Selenium_WebDriver_Recepies_in_Ruby()"
});
formatter.result({
  "duration": 8963397458,
  "status": "passed"
});
formatter.match({
  "location": "Review_Test.click_on_the_reviews()"
});
formatter.result({
  "duration": 225195993,
  "status": "passed"
});
formatter.match({
  "location": "Review_Test.click_on_rating()"
});
formatter.result({
  "duration": 398300792,
  "status": "passed"
});
formatter.match({
  "location": "Review_Test.enter_your_review()"
});
formatter.result({
  "duration": 615965951,
  "status": "passed"
});
formatter.match({
  "location": "Review_Test.close_the_opened_browser8()"
});
formatter.result({
  "duration": 2363298370,
  "status": "passed"
});
formatter.scenario({
  "line": 106,
  "name": "",
  "description": "Availability Check",
  "id": "test-practice-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 105,
      "name": "@TC10_TestPractice"
    }
  ]
});
formatter.step({
  "line": 108,
  "name": "the user first launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 109,
  "name": "the user then open TestPractice Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 110,
  "name": "click on the Thinking in HTML",
  "keyword": "Then "
});
formatter.step({
  "line": 111,
  "name": "check the availability of stock",
  "keyword": "Then "
});
formatter.step({
  "line": 112,
  "name": "close this browser9",
  "keyword": "Then "
});
formatter.match({
  "location": "AvailabilityCheck_Test.the_1st_user_first_launch_the_chrome_application()"
});
formatter.result({
  "duration": 4148458665,
  "status": "passed"
});
formatter.match({
  "location": "AvailabilityCheck_Test.the_user_then_open_TestPractice_Home_Page()"
});
formatter.result({
  "duration": 54933666877,
  "status": "passed"
});
formatter.match({
  "location": "AvailabilityCheck_Test.click_on_the_Thinking_in_HTML()"
});
formatter.result({
  "duration": 6538836721,
  "status": "passed"
});
formatter.match({
  "location": "AvailabilityCheck_Test.check_the_availability_of_stock()"
});
formatter.result({
  "duration": 72885915,
  "status": "passed"
});
formatter.match({
  "location": "AvailabilityCheck_Test.close_this_browser9()"
});
formatter.result({
  "duration": 2362617677,
  "status": "passed"
});
formatter.scenario({
  "line": 114,
  "name": "",
  "description": "Sort low to high",
  "id": "test-practice-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 113,
      "name": "@TC11_TestPractice"
    }
  ]
});
formatter.step({
  "line": 116,
  "name": "the 1stuser first launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 117,
  "name": "the 1stuser then open TestPractice Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 118,
  "name": "clicks on the shop page",
  "keyword": "Then "
});
formatter.step({
  "line": 119,
  "name": "sort the products from low to high",
  "keyword": "Then "
});
formatter.step({
  "line": 120,
  "name": "close the chrome browser",
  "keyword": "Then "
});
formatter.match({
  "location": "SortLowToHigh.the_user_first_launch_the_chrome_application()"
});
formatter.result({
  "duration": 4613017280,
  "status": "passed"
});
formatter.match({
  "location": "SortLowToHigh.the_1st_user_then_open_TestPractice_Home_Page()"
});
formatter.result({
  "duration": 11716793221,
  "status": "passed"
});
formatter.match({
  "location": "SortLowToHigh.clicks_on_the_shop_page()"
});
formatter.result({
  "duration": 8412573952,
  "status": "passed"
});
formatter.match({
  "location": "SortLowToHigh.sort_the_products_from_low_to_high()"
});
formatter.result({
  "duration": 32596135153,
  "status": "passed"
});
formatter.match({
  "location": "SortLowToHigh.close_the_chrome_browser()"
});
formatter.result({
  "duration": 2402498755,
  "status": "passed"
});
formatter.scenario({
  "line": 122,
  "name": "",
  "description": "Subscription",
  "id": "test-practice-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 121,
      "name": "@TC12_TestPractice"
    }
  ]
});
formatter.step({
  "line": 124,
  "name": "launch the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 125,
  "name": "TestPractice Home Page is opened",
  "keyword": "When "
});
formatter.step({
  "line": 126,
  "name": "enter the email in subscription",
  "keyword": "Then "
});
formatter.step({
  "line": 127,
  "name": "click on subscribe",
  "keyword": "Then "
});
formatter.step({
  "line": 128,
  "name": "close the chrome application",
  "keyword": "Then "
});
formatter.match({
  "location": "Subscription_Test.launch_the_chrome_browser()"
});
formatter.result({
  "duration": 4195111589,
  "status": "passed"
});
formatter.match({
  "location": "Subscription_Test.TestPractice_Home_Page_is_opened()"
});
formatter.result({
  "duration": 12853661281,
  "status": "passed"
});
formatter.match({
  "location": "Subscription_Test.enter_the_email_in_subscription()"
});
formatter.result({
  "duration": 467357970,
  "status": "passed"
});
formatter.match({
  "location": "Subscription_Test.click_on_subscribe()"
});
formatter.result({
  "duration": 128219280,
  "status": "passed"
});
formatter.match({
  "location": "Subscription_Test.close_the_chrome_application()"
});
formatter.result({
  "duration": 2404552814,
  "status": "passed"
});
formatter.scenario({
  "line": 130,
  "name": "",
  "description": "Register_Invalid_Email",
  "id": "test-practice-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 129,
      "name": "@TC13_TestPractice"
    }
  ]
});
formatter.step({
  "line": 132,
  "name": "launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 133,
  "name": "Home Page is opened",
  "keyword": "When "
});
formatter.step({
  "line": 134,
  "name": "go to myaccount page",
  "keyword": "Then "
});
formatter.step({
  "line": 135,
  "name": "enter mail id",
  "keyword": "Then "
});
formatter.step({
  "line": 136,
  "name": "enter password",
  "keyword": "Then "
});
formatter.step({
  "line": 137,
  "name": "click register",
  "keyword": "Then "
});
formatter.step({
  "line": 138,
  "name": "close chrome application",
  "keyword": "Then "
});
formatter.match({
  "location": "Register_InvalidEmail.launch_chrome_browser()"
});
formatter.result({
  "duration": 4475610570,
  "status": "passed"
});
formatter.match({
  "location": "Register_InvalidEmail.Home_Page_is_opened()"
});
formatter.result({
  "duration": 18638489572,
  "status": "passed"
});
formatter.match({
  "location": "Register_InvalidEmail.go_to_myaccount_page()"
});
formatter.result({
  "duration": 9069562457,
  "status": "passed"
});
formatter.match({
  "location": "Register_InvalidEmail.enter_mail_id()"
});
formatter.result({
  "duration": 446132843,
  "status": "passed"
});
formatter.match({
  "location": "Register_InvalidEmail.enter_password()"
});
formatter.result({
  "duration": 267680047,
  "status": "passed"
});
formatter.match({
  "location": "Register_InvalidEmail.click_register()"
});
formatter.result({
  "duration": 133618189,
  "status": "passed"
});
formatter.match({
  "location": "Register_InvalidEmail.close_chrome_application()"
});
formatter.result({
  "duration": 2421817856,
  "status": "passed"
});
formatter.scenario({
  "line": 150,
  "name": "",
  "description": "Register_WithoutEmailAndPassword",
  "id": "test-practice-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 149,
      "name": "@TC15_TestPractice"
    }
  ]
});
formatter.step({
  "line": 152,
  "name": "launching the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 153,
  "name": "Home Page should be open",
  "keyword": "When "
});
formatter.step({
  "line": 154,
  "name": "go to myaccountpage",
  "keyword": "Then "
});
formatter.step({
  "line": 155,
  "name": "leave mailid",
  "keyword": "Then "
});
formatter.step({
  "line": 156,
  "name": "leave password",
  "keyword": "Then "
});
formatter.step({
  "line": 157,
  "name": "click on register button",
  "keyword": "Then "
});
formatter.step({
  "line": 158,
  "name": "close the chrome app",
  "keyword": "Then "
});
formatter.match({
  "location": "Register_WithoutMailAndPassword.launching_the_chrome_browser()"
});
formatter.result({
  "duration": 4997266105,
  "status": "passed"
});
formatter.match({
  "location": "Register_WithoutMailAndPassword.Home_Page_should_be_opened()"
});
formatter.result({
  "duration": 12461028938,
  "status": "passed"
});
formatter.match({
  "location": "Register_WithoutMailAndPassword.go_to_myaccountpage()"
});
formatter.result({
  "duration": 12727033137,
  "status": "passed"
});
formatter.match({
  "location": "Register_WithoutMailAndPassword.enter_mailid()"
});
formatter.result({
  "duration": 92206301,
  "status": "passed"
});
formatter.match({
  "location": "Register_WithoutMailAndPassword.leave_password()"
});
formatter.result({
  "duration": 100033200,
  "status": "passed"
});
formatter.match({
  "location": "Register_WithoutMailAndPassword.click_on_register_button()"
});
formatter.result({
  "duration": 11648153187,
  "status": "passed"
});
formatter.match({
  "location": "Register_WithoutMailAndPassword.close_the_chrome_app()"
});
formatter.result({
  "duration": 2383181364,
  "status": "passed"
});
formatter.scenario({
  "line": 160,
  "name": "",
  "description": "Register_WithoutPassword",
  "id": "test-practice-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 159,
      "name": "@TC16_TestPractice"
    }
  ]
});
formatter.step({
  "line": 162,
  "name": "launching the chromeBrowser",
  "keyword": "Given "
});
formatter.step({
  "line": 163,
  "name": "open home page",
  "keyword": "When "
});
formatter.step({
  "line": 164,
  "name": "click on myaccountpage",
  "keyword": "Then "
});
formatter.step({
  "line": 165,
  "name": "enter the mailid",
  "keyword": "Then "
});
formatter.step({
  "line": 166,
  "name": "leave the password",
  "keyword": "Then "
});
formatter.step({
  "line": 167,
  "name": "click the register button",
  "keyword": "Then "
});
formatter.step({
  "line": 168,
  "name": "close the chromeApplication",
  "keyword": "Then "
});
formatter.match({
  "location": "Register_WithoutPassword.launching_the_chromeBrowser()"
});
formatter.result({
  "duration": 4283913570,
  "status": "passed"
});
formatter.match({
  "location": "Register_WithoutPassword.open_home_page()"
});
formatter.result({
  "duration": 13528365344,
  "status": "passed"
});
formatter.match({
  "location": "Register_WithoutPassword.click_on_myaccountpage()"
});
formatter.result({
  "duration": 5231459994,
  "status": "passed"
});
formatter.match({
  "location": "Register_WithoutPassword.enter_the_mailid()"
});
formatter.result({
  "duration": 295683868,
  "status": "passed"
});
formatter.match({
  "location": "Register_WithoutPassword.leave_the_password()"
});
formatter.result({
  "duration": 285190671,
  "status": "passed"
});
formatter.match({
  "location": "Register_WithoutPassword.click_the_register_button()"
});
formatter.result({
  "duration": 7674206914,
  "status": "passed"
});
formatter.match({
  "location": "Register_WithoutPassword.close_the_chromeApplication()"
});
formatter.result({
  "duration": 2367342739,
  "status": "passed"
});
});