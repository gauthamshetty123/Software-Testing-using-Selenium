Feature: User Registration

  @registration
  Scenario Outline: User Registration
    Given I am in dashboard page for registration
    When I click on the Login navigation bar for registration
    And I click on the Register link for registration
    And I enter username as "<username>" for registration
    And I enter email as "<email>" for registration
    And I enter password as "<password>" for registration
    And I click on the Register button for registration
    Then I should get message "<registration_message>" for registration

    #unhappy
    Examples:
      | username | email                 | password | registration_message                           |
      |          |                       |          | Name is not allowed to be empty                |
      | Durgaprasad| durgaprasaddp@gmail.com|          | Email is not allowed to be empty               |
      | Durgaprasad| durgaprasaddp@gmail.com |          | Password is not allowed to be empty            |
      | Dp       | durgaprasaddp@gmail.com |Dpenter@17 | Name length must be at least 3 characters long |
      | Durgaprasad | durgaprasaddp@gmail.com  |Dpian@05 | Email must be a valid email address            |
      |Durgaprasad  | durgaprasaddp@gmail.com |Dpvian    | Password should be at least 8 characters long  |
      | Durgaprasad  | durgaprasaddp@gmail.com|Dpvian@we | Password should contain at least 1 number      |
      | Durgaprasad | durgaprasaddp@gmail.com |Dpvianw1  | Password should contain at least 1 symbol      |
    #happy
    Examples:
      | username | email                 | password | registration_message                |
      | Durgaprasad   | durgaprasaddp@gmail.com | Dpenter@17 | User successfully registered        |