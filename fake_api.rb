require 'sinatra'
require 'sinatra/reloader'

get '/' do
  File.new('public/index.html').readlines
end

get '/api/v1/stops.json' do
  if params[:bbox]
    json_response 200, 'stops_bbox.json'
  elsif params[:lat] && params[:lon] && params[:r]
    json_response 200, 'stops_lat_lon_r.json'
  elsif params[:identifier]
    json_response 200, 'stops_identifier.json'
  elsif params[:bbox] && params[:servedByOperator]
    json_response 200, 'stops_bbox_servedByOperator.json'
  else
    halt 404
  end
end

get '/api/v1/operators.json' do
  if params[:lat] && params[:lon]
    json_response 200, 'operators_lat_lon.json'
  elsif params[:identifier]
    json_response 200, 'operators_identifier.json'
  else
    json_response 200, 'operators.json'
  end
end

def json_response(response_code, file_name)
  content_type :json
  status response_code
  File.open(File.dirname(__FILE__) + '/fake-json/' + file_name, 'rb').read
end
