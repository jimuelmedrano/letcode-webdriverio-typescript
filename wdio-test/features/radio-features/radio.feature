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
 
    @regression @radio
    Scenario Outline: As a user, I can verify that only one radio option can be selected

        Given I am on letcode workspace page
        When I click radio page
        And I select the first radio of the second radio automation challenge
        And I confirm that the second radio is not selected
        And I select the second radio of the second radio automation challenge
        And I confirm that the first radio is not selected

        Examples:
            |  |
            |  |

    @regression @radio
    Scenario Outline: As a user, I can verify that the radion options has a bug

        Given I am on letcode workspace page
        When I click radio page
        And I select the both radio of the third radio automation challenge
        And I confirm that both option of the third radio automation challenge is selected
    
        Examples:
            |  |
            |  |

    @regression @radio
    Scenario Outline: As a user, I can verify which option is selected

        Given I am on letcode workspace page
        When I click radio page
        And I check and print which option is selected
        
        Examples:
            |  |
            |  |

    @regression @radio
    Scenario Outline: As a user, I can verify that last option is disabled

        Given I am on letcode workspace page
        When I click radio page
        And I verify that last radio option is disabled
        
        Examples:
            |  |
            |  |