# Transitland Playground

**We're no longer maintaining the Transitland Playground, but the code is still available here for reference. And this readme includes screenshots showing the Playground in action. If you'd like to quickly start interacting with the Transitland Datastore API in a web browser, please try the Mapzen Mobility Explorer at https://mapzen.com/mobility/explorer/ (its source code is also on GitHub at [mapzen/mobility-explorer](https://github.com/mapzen/mobility-explorer)).**

The [Transitland Playground](https://transit.land/playground) is a Backbone.js app designed to be a friendly interface for the [Transitland Datastore API](https://transit.land/documentation/datastore/api-endpoints.html), providing a way to view and download transit data without writing any lines of code. 

![Transitland Playground UI](https://github.com/transitland/playground/raw/master/images/README_00_Transitland_Playground.png "Transitland Playground UI")

The Playground allows for querying for routes, stops and operators by name:

![Query for routes by operator name](https://github.com/transitland/playground/raw/master/images/README_01_routes_by_operator.png "Query for routes by operator name")

By place:

![Query for operators by place](https://github.com/transitland/playground/raw/master/images/README_02_operators_by_place.png "Query for operators by place")

Or map view:

![Query for stops by map view](https://github.com/transitland/playground/raw/master/images/README_03_stops_by_mapview.png "Query for stops by map view")

Query data is provided in a table below the map:

![Table showing query data](https://github.com/transitland/playground/raw/master/images/README_04_data_table.png "Table showing query data")

The Playground is no longer hosted on Transitland's web servers, but you can still run it locally on your own computer:

1. Make sure you have Ruby available
2. Install dependencies: `bundle install`
3. Start the local development web server: `bundle exec jekyll serve`.

The Mapzen [Mobility Explorer](https://mapzen.com/mobility/explorer) now provides a way to view Transitland data, as well test out Mapzen mobility APIs.

---


## Contact

Contact us with your questions, comments, or suggestions: [hello@mapzen.com](mailto:hello@transit.land).
