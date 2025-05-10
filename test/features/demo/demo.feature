Feature: Demo Feature
  Feature Description

  @demo
  Scenario Outline: Run first demo feature
    Given Google page is open
    When Search with <SearchItem>
    Then I click on the first result
    # Then the url should match <ExpectedUrl>
    Examples:
      | SearchItem | ExpectedUrl |
      | WDIO       | sss         |