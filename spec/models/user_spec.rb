require 'rails_helper'

describe User do

	it { is_expected.to validate_presence_of :username }

	it { is_expected.to validate_uniqueness_of :username }
  
  let(:amanda) { User.new( username: "mandytrex",
                       password: "amanda",
                       password_confirmation: "amanda") }
  
  it "is valid with a username and password" do
    expect(amanda).to be_valid
  end
 
 it "is invalid without a username" do
   new_user = User.new(username: nil)
   expect(new_user).to have(1).errors_on(:username)
 end
 
 it "must have matching password and password confirmation" do
   new_user  = User.new( username: "joenapo",
                        password: "joe",
                        password_confirmation: "aaa")
                        
  errors = new_user.errors_on(:password_confirmation)
  error_included = errors.include?("doesn't match Password")
  expect(error_included).to eq(true)
 end
 
 it "is invalid without a unique username/doesn't allow duplicates" do
   amanda.save!
   hari = User.new( username: "mandytrex",
            password: "GA",
            password_confirmation: "GA")
  expect(hari).to have(1).errors_on(:username)
 end


end