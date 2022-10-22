const mjml2html = require("mjml");

module.exports = (payload) => {
  return mjml2html(`
<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-text color="#1c462c" font-size="28px" align="center">
          SS. Peter & Paul Meat Raffle
        </mj-text>
        
        <mj-divider
          border-color="#1c462c"
          padding="10px 0px 20px 0px"
        ></mj-divider>

        <mj-text font-size="22px" align="center">
          Thank you for your purchase!
        </mj-text>

        <mj-text font-size="18px">
          Your raffle purchase is complete! Below is your purchase information
          for your records. We'll see you at the raffle on April 29th!
        </mj-text>

        <mj-table font-size="16px">
          <tr>
            <td style="text-align: right">Tickts Purchased:</td>
            <td style="padding: 2px 15px;">${payload.ticketsPurchased}</td>
          </tr>
          <tr>
            <td style="text-align: right">Name:</td>
            <td style="padding: 2px 15px;">${payload.name}</td>
          </tr>
          <tr>
            <td style="text-align: right">Email:</td>
            <td style="padding: 2px 15px;">${payload.email}</td>
          </tr>
          <tr>
            <td style="text-align: right">Address:</td>
            <td style="padding: 2px 15px;">${payload.address}</td>
          </tr>
          <tr>
            <td style="text-align: right">Phone:</td>
            <td style="padding: 2px 15px;">${payload.phone}</td>
          </tr>
          <tr>
            <td style="text-align: right">Total:</td>
            <td style="padding: 2px 15px;">${payload.amount}</td>
          </tr>
          <tr>
            <td style="text-align: right">Charged to:</td>
            <td style="padding: 2px 15px;">${payload.chargedTo}</td>
          </tr>
          <tr>
            <td style="text-align: right">Confirmation ID:</td>
            <td style="padding: 2px 15px;">${payload.id}</td>
          </tr>
        </mj-table>

        <mj-text font-size="18px">
          Any questions or concerns, please contact Melissa D'Arcangelo at
          darcanm@amazon.com.
        </mj-text>

        <mj-divider
          border-color="#cb9e61"
          padding="10px 0px 20px 0px"
        ></mj-divider>

        <mj-text
          padding="0px 10px"
          font-size="12px"
          font-family="sans"
          align="center"
        >
          SS. Peter & Paul Parish Community
        </mj-text>

        <mj-text
          padding="6px 10px"
          font-size="12px"
          font-family="sans"
          align="center"
        >
          66 East Main St., Hamburg NY 14075 - 716.649.2765 - Rectory
        </mj-text>

        <mj-text
          padding="0px 10px"
          font-size="12px"
          font-family="sans"
          align="center"
        >
          Monday - Friday, 9 a.m. - 4:00 p.m.
        </mj-text>

        <mj-social font-size="15px" icon-size="30px" mode="horizontal">
          <mj-social-element
            name="facebook"
            href="https://www.facebook.com/ChurchSSPP"
          >
            Facebook
          </mj-social-element>
          <mj-social-element
            name="twitter"
            href="https://twitter.com/SSPP14075"
          >
            Twitter
          </mj-social-element>
        </mj-social>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>`);
};
