require 'test_helper'

class GoalsControllerControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get goals_controller_index_url
    assert_response :success
  end

end
