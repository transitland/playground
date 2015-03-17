# transitland-developer-playground

## To Run Fake API

````bash
bundle install
ruby fake_api.rb
open http://localhost:4567
````

## Faked API Endpoints

URL | Description
--- | -----------
http://localhost:4567/api/v1/stops.json?bbox=-122.39893913269043,37.76651662158726,-122.38070011138915,37.77178331201861 | all stops within bounding box
http://localhost:4567/api/v1/stops.json?lat=37.77574368395905&lon=-122.41366982460022&r=200 | all stops within radius of point
http://localhost:4567/api/v1/stops.json?identifier=Metro%20Embarcadero%20Station | find stops by `identifier`
http://localhost:4567/api/v1/stops.json?bbox=-122.39893913269043,37.76651662158726,-122.38070011138915,37.77178331201861&servedByOperator=o-9q8y-SFMTA | all stops within bounding box served by operator with Onestop ID
http://localhost:4567/api/v1/operators.json | all operators
http://localhost:4567/api/v1/operators.json?identifier=BART | find operators by `identifier`
http://localhost:4567/api/v1/operators.json?bbox=-122.39893913269043,37.76651662158726,-122.38070011138915,37.77178331201861 | all operators with service area (convex hull) in at least part of that bbox
http://localhost:4567/api/v1/operators.json?lat=37.77574368395905&lon=-122.41366982460022 | all operators with that point in their service area (convex hull)
http://localhost:4567/api/v1/routes.json?bbox=-122.3440933227539,37.80571520704471,-122.20109939575194,37.90208416548882 | all routes within bounding box
http://localhost:4567/api/v1/routes.json?bbox=-122.3440933227539,37.80571520704471,-122.20109939575194,37.90208416548882&operatedBy=o-9q9-actransit | all routes within bounding box served by operator with Onestop ID
