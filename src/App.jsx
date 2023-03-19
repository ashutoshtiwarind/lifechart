import { MyResponsiveCalendar } from "./components/chart/chart";
import { Header } from "./components/header/Header";
import Home from "./components/home/components/Home";
import Login from "./components/login/components/Loing.jsx";
import SignUp from "./components/signup/components/SignUp.jsx";

function App() {
  const data  = [{
    "value": 243,
    "day": "2015-04-05"
  },
  {
    "value": 307,
    "day": "2015-12-01"
  },
  {
    "value": 326,
    "day": "2016-08-12"
  },
  {
    "value": 15,
    "day": "2015-06-02"
  },
  {
    "value": 377,
    "day": "2016-03-27"
  },
  {
    "value": 299,
    "day": "2016-06-25"
  },
  {
    "value": 211,
    "day": "2017-11-04"
  },
  {
    "value": 158,
    "day": "2016-02-13"
  },
  {
    "value": 129,
    "day": "2018-07-14"
  },
  {
    "value": 364,
    "day": "2017-10-08"
  },
  {
    "value": 166,
    "day": "2017-10-28"
  },
  {
    "value": 70,
    "day": "2018-01-24"
  },
  {
    "value": 137,
    "day": "2016-03-11"
  },
  {
    "value": 218,
    "day": "2017-06-07"
  },
  {
    "value": 267,
    "day": "2016-03-13"
  },
  {
    "value": 305,
    "day": "2017-04-13"
  },
  {
    "value": 327,
    "day": "2016-10-16"
  },
  {
    "value": 332,
    "day": "2016-02-06"
  },
  {
    "value": 266,
    "day": "2018-02-16"
  },
  {
    "value": 236,
    "day": "2018-03-28"
  },
  {
    "value": 334,
    "day": "2017-04-01"
  },
  {
    "value": 314,
    "day": "2017-12-14"
  },
  {
    "value": 290,
    "day": "2017-09-01"
  },
  {
    "value": 290,
    "day": "2015-04-22"
  },
  {
    "value": 291,
    "day": "2017-08-05"
  },
  {
    "value": 104,
    "day": "2016-04-07"
  },
  {
    "value": 203,
    "day": "2015-10-12"
  },
  {
    "value": 105,
    "day": "2017-10-11"
  },
  {
    "value": 328,
    "day": "2018-04-01"
  },
  {
    "value": 383,
    "day": "2016-08-29"
  },
  {
    "value": 215,
    "day": "2015-12-30"
  },
  {
    "value": 398,
    "day": "2015-10-21"
  },
  {
    "value": 176,
    "day": "2015-05-29"
  },
  {
    "value": 235,
    "day": "2016-05-11"
  },
  {
    "value": 211,
    "day": "2016-05-27"
  },
  {
    "value": 316,
    "day": "2016-05-04"
  },
  {
    "value": 392,
    "day": "2018-01-23"
  },
  {
    "value": 10,
    "day": "2017-01-12"
  },
  {
    "value": 231,
    "day": "2018-04-18"
  },
  {
    "value": 81,
    "day": "2017-10-03"
  },
  {
    "value": 34,
    "day": "2015-08-28"
  },
  {
    "value": 114,
    "day": "2015-06-20"
  },
  {
    "value": 359,
    "day": "2018-06-28"
  },
  {
    "value": 105,
    "day": "2017-04-30"
  },
  {
    "value": 305,
    "day": "2016-08-21"
  },
  {
    "value": 156,
    "day": "2016-11-23"
  },
  {
    "value": 256,
    "day": "2015-07-23"
  },
  {
    "value": 381,
    "day": "2017-10-16"
  },
  {
    "value": 72,
    "day": "2015-09-26"
  },
  {
    "value": 194,
    "day": "2016-05-21"
  },
  {
    "value": 78,
    "day": "2016-01-09"
  },
  {
    "value": 176,
    "day": "2018-06-18"
  },
  {
    "value": 130,
    "day": "2016-05-24"
  },
  {
    "value": 215,
    "day": "2018-06-12"
  },
  {
    "value": 151,
    "day": "2017-12-16"
  },
  {
    "value": 73,
    "day": "2018-06-05"
  },
  {
    "value": 118,
    "day": "2017-10-29"
  },
  {
    "value": 376,
    "day": "2015-04-26"
  },
  {
    "value": 52,
    "day": "2018-04-17"
  },
  {
    "value": 212,
    "day": "2018-03-31"
  },
  {
    "value": 107,
    "day": "2017-04-18"
  },
  {
    "value": 267,
    "day": "2015-06-28"
  },
  {
    "value": 300,
    "day": "2018-04-05"
  },
  {
    "value": 163,
    "day": "2016-08-26"
  },
  {
    "value": 224,
    "day": "2017-05-28"
  },
  {
    "value": 72,
    "day": "2015-08-31"
  },
  {
    "value": 81,
    "day": "2018-02-27"
  },
  {
    "value": 368,
    "day": "2016-05-06"
  },
  {
    "value": 297,
    "day": "2016-10-31"
  },
  {
    "value": 158,
    "day": "2015-11-14"
  },
  {
    "value": 297,
    "day": "2017-09-26"
  },
  {
    "value": 311,
    "day": "2015-04-12"
  },
  {
    "value": 188,
    "day": "2017-06-12"
  },
  {
    "value": 216,
    "day": "2017-11-21"
  },
  {
    "value": 18,
    "day": "2016-07-19"
  },
  {
    "value": 159,
    "day": "2015-08-22"
  },
  {
    "value": 158,
    "day": "2015-06-16"
  },
  {
    "value": 370,
    "day": "2016-12-24"
  },
  {
    "value": 387,
    "day": "2018-04-11"
  },
  {
    "value": 346,
    "day": "2018-01-07"
  }
];
  return (
    <div>
      <Header data={data} />
      <Login />
      <SignUp />
      <Home />
      life chart projects
      <MyResponsiveCalendar data={data} />
    </div>
  );
}

export default App;
