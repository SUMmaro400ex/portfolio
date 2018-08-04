# server.rb
require 'sinatra'

get '/' do
  File.read(File.join('public','JonRoseOld.html'))
end
