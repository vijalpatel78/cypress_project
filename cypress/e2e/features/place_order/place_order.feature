@smoke @all
Feature: Place an Order

    Retail, Trade, or Wholesale customer can place an order

    Background: Precondition
        Given the customer is on the home page

    #------------------------------------------------- Case:1 -------------------------------------------------

    Scenario: Case_01 The retail customer should be able to search and place an order for a product 
        When the 'Retail' customer do login into the website
            And search 'Darlana Small Lantern' and select 'Darlana Small Lantern' search option
            And click on the 'Darlana Small Lantern' product from the products list
            And enter the following product details:
                | Finish | Aged Iron |
                | Bulb   | No        |
            And click on the add to cart button
            And close the item added to cart popup in the case of no bulb
            And click on the begin checkout button from the mini cart
            And select 'Standard Overnight' shipping method
            And click on the continue to payment button
            And select 'Credit/Debit Card' payment method
            And enter the following credit or debit card details:
                | Name             | Test Account    |
                | Card Number      | 370000000000002 |
                | Expiration Month | 07 - July       |
                | Expiration Year  | 2027            |
                | CVV              | 1234            |
            And click on the place order button
       Then the order of product should get placed with 'Thank you for your purchase' message

    #------------------------------------------------- Case:2 -------------------------------------------------
    
    Scenario: Case_02 The trade customer should be able to select and place an order for a product 
        When the 'Trade' customer do login into the website
            And click on the 'Chandelier' submenu of 'Ceiling' mega menu
            And click on the 'Classic Ring Chandelier' product from the products list
            And enter the following product details:
                | Finish | Bronze                       |
                | Shade  | 3" x 6.5" x 5" Natural Paper |
                | Bulb   | Yes                          |
                | Qty    | 2                            |
            And click on the add to cart button
            And click on the begin checkout button from the mini cart
            And select '2 Day' shipping method
            And click on the continue to payment button
            And select 'Credit/Debit Card' payment method
            And enter the following credit or debit card details:
                | Name             | Test Account    |
                | Card Number      | 370000000000002 |
                | Expiration Month | 10 - October    |
                | Expiration Year  | 2024            |
                | CVV              | 1234            |
            And click on the place order button
        Then the order of product should get placed with 'Thank you for your purchase' message

    #------------------------------------------------- Case:3 -------------------------------------------------
    @skip
    Scenario: Case_03 The wholesale customer should be able to select and place an order for a product 
        When the 'Wholesale' customer do login into the website
            And click on the 'Chandelier' submenu of 'Ceiling' mega menu
            And click on the 'Melange Large Floating Disc Chandelier' product from the products list
            And enter the following product details:
                | Finish | Antique-Burnished Brass |
                | Shade  | Alabaster               |
            And click on the add to cart button
            And click on the begin checkout button from the mini cart
            And select 'Priority Overnight' shipping method
            And click on the continue to payment button
            And select 'Credit/Debit Card' payment method
            And enter the following credit or debit card details:
                | Name             | Test Account      |
                | Card Number      | 370000000000002   |
                | Expiration Month | 11 - November     |
                | Expiration Year  | 2025              |
                | CVV              | 1234              |
            And click on the place order button
        Then the order of product should get placed with 'Thank you for your purchase' message