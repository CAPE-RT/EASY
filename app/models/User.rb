require 'couchbase/model'

class User < Couchbase::Model
	attribute :myid, :password, :password_confirmation
  
  attr_accessor :password
  before_save :encrypt_password
  
  validates_confirmation_of :password
  validates_presence_of :password, :on => :create
  validates_presence_of :myid
  #validates_uniqueness_of :email
  
  def self.authenticate(myid, password)
    user = User.find(myid)
    if user.myid && user.password == password
      user
    else
      nil
    end
  end
  
  #def encrypt_password
  #  if password.present?
   #   self.password_salt = BCrypt::Engine.generate_salt
    #  self.password_hash = BCrypt::Engine.hash_secret(password, password_salt)
    #end
  #Send
end

#p = User.new(:id => 'test28', :title => 'hello', :body => 'yo')
#p.save