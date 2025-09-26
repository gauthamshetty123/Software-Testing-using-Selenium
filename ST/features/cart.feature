@addCart

Feature:addCart
Scenario Outline: addCart
    Given I am in dashboard page 
    When I click on the Login navigation bar
    And I enter valid email as "<login_email>" for login
    And I enter valid password as "<login_password>" for login
    And I click on the Login button 
    And I should get the message for login "<login_message>" 
    And I click on the product
    And It should navigate to the new window
    And I click on the add to cart button
    And I should get the message for cart "<addCart_message>"
    Then The carted product there in cart page


    #happy
    Examples:
        | login_email           | login_password | login_message          | addCart_message          |
        | durgaprasaddp@gmail.com | Dpenter@17       | Logged in successfully | Item carted successfully |