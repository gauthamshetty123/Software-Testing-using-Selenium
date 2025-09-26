
Feature: User Login

  @login
  Scenario Outline: User Login
    Given I am in dashboard page for login
    When I click on the Login navigation bar for login
    And I enter email as "<login_email>" for login
    And I enter password as "<login_password>" for login
    And I click on the Login button for login
    Then I should get the message "<login_message>" for login

    #unhappy

    Examples:
      | login_email           | login_password | login_message                                  |
      | durgaprasaddpgmail.com  | Dpian@05      | Email must be a valid email address            |
      | durgaprasaddp@gmail.com | Dppp         | Password should be at least 8 characters long  |
      | durgaprasaddp@gmail.com | Dp@aww@@     | Password should contain at least 1 number      |
      | durgaprasaddp@gmail.com | Dp123gfy       | Password should contain at least 1 symbol      |
      | durgaprasaddp@gmail.com | Dpp@04dp       | Invalid Email or password                      |      
      
    #happy

    Examples:
      | login_email           | login_password | login_message          |
      | durgaprasaddp@gmail.com | Dpenter@17       | Logged in successfully |


      