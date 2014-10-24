require 'bcrypt'
require 'couchbase/model'

class User < Couchbase::Model
  #include ActiveRecord::SecurePassword
  #include BCrypt
  attribute :myid, :password, :password_confirmation, :first_name, :last_name
  
  #has_secure_password
  
  attr_accessor :myid, :password, :password_confirmation
  validates :password, confirmation: true, presence: true
  validates :password_confirmation, presence: true
  #before_save :encrypt_password

  def self.authenticate(myid, password)
    user = User.find(myid)
    if user.myid && user.password == password
      user
    else
      nil
    end
  end

  private
  def encrypt_password
    self.hashed_password = BCrypt::Password.create(@password)
  end

end

#p = User.new(:id => 'test28', :title => 'hello', :body => 'yo')
#p.save