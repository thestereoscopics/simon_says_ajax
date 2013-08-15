get '/' do
  erb :index
end

post '/color' do
  content_type :JSON
  
  cell= rand(1..9)
  color= "#" + "%06x" % (rand * 0xffffff)
  
  { background: color, box: cell }.to_json
  #Create and return a JSON object with the random cell and color given below.
  # erb :color_change
end