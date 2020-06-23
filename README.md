# wishop

A Shopping UI for WeChat Mini Program
created with native WeChat Miniprogram code and zero packaging tool.

## Start
### construct miniprogram_npm
### start json-server
### setup remote server(for wechat login)

## Framework

1. Native WeChat Mini Program (Base Library 2.11.0)
2. [WeUI](https://developers.weixin.qq.com/miniprogram/dev/extended/weui/)
3. sass
4. [Lumen - Laravel](https://lumen.laravel.com/docs/7.x): Remote Restful API
- WeChat Login

## Dependent Libraries:

1. State Management: [Omix](https://github.com/Tencent/omi/tree/master/packages/omix)
2. Icon: [h2d2-shopicons](https://github.com/H2D2-Design/h2d2-shopicons/tree/master/PNG)

## Dev Libraries:

1. Mock Data: [Mockjs](https://github.com/nuysoft/Mock)
2. Mock server: [json-server](https://github.com/typicode/json-server)

## Features
// TODO

## MVP Roadmap

### .env

### 1. [Promise](https://developers.weixin.qq.com/miniprogram/dev/extended/utils/api-promise.html)
### 2. api.js
### 3. JD-like shopping experience
- [Waterfall & infinite scroll](https://mp.weixin.qq.com/s/ZFVpNbmLEtZimZRxFD0Eow)
- Product Search (filter)
- Product display
- Cart
- User dashboard
- Payment
- Product Share
- Cart Share
- Customer Service
### 4. Worker

## TODO

### 1. [Theme customisation/darkmode](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/darkmode.html#%E5%8F%98%E9%87%8F%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6-theme-json)

- app.wxss
- theme.json

### 2. Demo generation for APP sale

- Static content generation
- [Language support](https://developers.weixin.qq.com/miniprogram/dev/extended/utils/miniprogram-i18n/quickstart.html)
- Module switch
- Screenshot
- GIF

### 3. Production Ready
- [Error report](https://developers.weixin.qq.com/miniprogram/dev/framework/realtimelog/)
- [Package slimmer](https://github.com/wechat-miniprogram/miniprogram-slim)

## Next
- Delay login
- [Upgrade control](https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/update-mechanism.html)
- Various Promotion (algorithm on manipulating price)
- [Animation](https://developers.weixin.qq.com/miniprogram/dev/extended/utils/lottie.html)
- [Analytics](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/data-analysis.html)
- [MP Performance](https://developers.weixin.qq.com/miniprogram/dev/framework/performanceReport/)
- [State reserve-Page Reload ](https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/operating-mechanism.html)
- [Ads](https://wximg.qq.com/wxp/pdftool/get.html?post_id=851)
- [VIP Membership](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/card/card.html)
- [WeChat push notification](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/subscribe-message.html)
- [Live](https://developers.weixin.qq.com/miniprogram/dev/framework/liveplayer/live-player-plugin.html)

# Pluggable Product manager
- product manager
- product search
- product display

# Consolidate Platform
//


# Dev logs
## Week 1 (1/6/2020)
- Wed,Thu: [WeChat login](https://developers.weixin.qq.com/community/develop/article/doc/000e0e173b85a85013397236c5bc13)
- Fri: UI(WeUI based)-TabBar
- Sat: UI(WeUI based)-SearchBar; NavigationBar; Banner
- Sun: UI(WeUI based)-EventList

## Week 2 (8/6/2020)
- Mon: UI(WeUI based)-Waterfall-ProductList
- Tue: UI(WeUI based)-Waterfall-ProductList-InfinityScroll
- Wed: UI(WeUI based)-Product-mock JD UI-Gallery

## Week 3 (15/6/2020)
- Fri: UI(WeUI based)-Product-mock JD UI

# API Server backlogs
- sessionId