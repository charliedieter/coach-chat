require 'test_helper'

class Users::SessionsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get users_sessions_create_url
    assert_response :success
  end

  test "should get delete" do
    get users_sessions_delete_url
    assert_response :success
  end

end
