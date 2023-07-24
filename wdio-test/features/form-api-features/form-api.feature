Feature: Letcode Form Page

    @regression @form
    Scenario Outline: As a user, I can select an option using visible text

        Given I am on letcode workspace page
        When I click form page
        And I input form first name
        And I input form last name
        And I input form email
        And I select form country code
        And I input form phone number
        And I input form address line 1
        And I input form address line 2
        And I input form state
        And I input form postal code
        And I select form country
        And I input form date of birth
        And I select form gender
        And I click agree to form terms and condition
        And I click form submit button
        Then I should be able to verify that the form is successfully submitted

        Examples:
            |  |
            |  |