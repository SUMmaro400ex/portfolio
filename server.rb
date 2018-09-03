# server.rb
require 'sinatra'

get '/' do
  File.read(File.join('public','JonRose.html'))
end
