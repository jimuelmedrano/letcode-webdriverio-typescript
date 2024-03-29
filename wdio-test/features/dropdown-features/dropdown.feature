Feature: Letcode Dropdown Page

    @regression @dropdown
    Scenario Outline: As a user, I can select an option using visible text

        Given I am on letcode workspace page
        When I click dropdown page
        And I click the first dropdown and select the option: <option>
        Then I should be able to verify that the selected option is <option>

        Examples:
            | option |
            | Mango  |
            | Banana |

    @regression @dropdown
    Scenario Outline: As a user, I can select multiple options

        Given I am on letcode workspace page
        When I click dropdown page
        And I get and print all the options of second dropdown
        Then I should be able to select the following options: <options>

        Examples:
            | options                           |
            | Spider-Man, Batman, Black Panther |

    @regression @dropdown
    Scenario Outline: As a user, I can select last option

        Given I am on letcode workspace page
        When I click dropdown page
        And I select the last option of third dropdown and print all option
        Then I should be able to verify that the selected programming language option is <option>

        Examples:
            | option |
            | C#     |

    @regression @dropdown
    Scenario Outline: As a user, I can select using value

        Given I am on letcode workspace page
        When I click dropdown page
        Then I should be able to select option of last dropdown using value: <value>

        Examples:
            | value |
            | India |