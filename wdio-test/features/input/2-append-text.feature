Feature: Letcode Append Text and Press Tab

    @input
    Scenario Outline: As a user, I can append text in the field and press tab

        Given I am on letcode workspace page
        When I click input edit button
        And I append the text: `<append>` inside the input field and press tab
        Then The current input field text should include the appended text: `<append>`

        Examples:
            | append        |
            | at automation |
