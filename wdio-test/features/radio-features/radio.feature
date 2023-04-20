Feature: Letcode Radio Page

    @regression @radio
    Scenario Outline: As a user, I can select one radio option

        Given I am on letcode workspace page
        When I click radio page
        And I select one of the first radio options
        Then I confirm that the first radio button is selected

        Examples:
            |  |
            |  |