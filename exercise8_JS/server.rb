require 'sinatra'

set :public_folder, Proc.new { File.join(root, 'public') }

get '/' do
  erb :index
end
