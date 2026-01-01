const fetch = require("node-fetch");

fetch(
  "https://order.dominos.ca/store-locator-international/locate/store?regionCode=CA&latitude=43.64689310000001&longitude=-79.5269161",
  {
    headers: {
      accept:
        "application/vnd.com.dominos.ecommerce.store-locator.response+json;version=1.2",
      "accept-language": "en-US,en;q=0.9",
      "dpz-language": "en",
      "dpz-market": "CANADA",
      market: "CANADA",
      priority: "u=1, i",
      "sec-ch-ua":
        '"Microsoft Edge";v="143", "Chromium";v="143", "Not A(Brand";v="24"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-dpz-d": "1fbaf5e4-62a8-473c-832a-22b422a95ee4",
      cookie:
        "ak_bmsc=D1AFFAF4367996D6D1CE2F6737F5668F~000000000000000000000000000000~YAAQSKcQAqJsRUibAQAA24N/ex7lc7UkFgEIlMqt6ETZhlxIYjOtlQncbvfdevi42n94wF647jldVNahTGIOeHNZw0GhVWWJvWdOFV+DNMUNtpaeW1vcKSQ8gNrTUEdXe+yyQzcl96xIq4mHEP7PGrEtEAe6vVEzSylFzida5OuG+yZsGykGm/LHx0y5VtBkWvUWOLkDTUW/wo6yWKNDIF31vqqzZmrq4/DvwBanK4BbnDbMNRKqyuK21c7B9xxlvgpzA2TMe4KvRePQtT2xPxACdEt6UGYzBUIFg0GmOEEYMl2tJY6gc3BvWRxh97qhcXprbbWFiXJb89ZIbhgr8qpbfW4h0a4l0cqAh9ujHNzCd57N6tQdvxyJIUzsJX3vT+L7ZkTjmo0frrjxuw==; X-DPZ-D=1fbaf5e4-62a8-473c-832a-22b422a95ee4; _gcl_au=1.1.574490803.1767303517; _ga=GA1.1.2104657438.1767303517; FPID=FPID2.2.rQ5NrHmX5qwvK%2BPdQvr5qsYy5Y4WUfBJgRI%2FA545w6E%3D.1767303517; FPLC=SvrJZcOO6d6zD1emzhPQYiaTZ2TET0c6GgZJxaXshJWDT%2BzEdr0IEvjSZBlPQvuWgA1fPlAII8OFOdaNjF2EDHcIcX2DlCQF17SLf2EVO5QfpqatrCdJ4pXxS2QP1A%3D%3D; _scid=56f79f25-7a01-468a-441b-6db7f4c7d2dd; AKA_A2=A; _ga_C5MC9QZL0Z=GS2.1.s1767303516$o1$g1$t1767305297$j38$l0$h843537044",
      Referer: "https://order.dominos.ca/assets/build/xdomain/proxy.html",
    },
    body: null,
    method: "GET",
  }
);
