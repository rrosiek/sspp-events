const mjml2html = require("mjml");

module.exports = (payload) => {
  return mjml2html(`
<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-image
          padding="0px 10px 10px 10px"
          container-background-color="#ce2f36"
          src="https://firebasestorage.googleapis.com/v0/b/sspp-production.appspot.com/o/static%2Fchristmas_raffle_logo.png?alt=media&token=6f7ad80d-d10d-467f-b2a0-5dab7b4aa89a"
        ></mj-image>

        <mj-divider
          border-color="#cb9e61"
          padding="10px 0px 20px 0px"
        ></mj-divider>

        <mj-text font-size="18px" color="#7f3037" font-family="sans">
          New raffle purchase completed.
        </mj-text>

        <mj-table font-size="16px" font-family="sans">
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
            <td style="text-align: right">Referring Family:</td>
            <td style="padding: 12px 15px;">${payload.referringFamily}</td>
          </tr>
          <tr>
            <td style="text-align: right">Total:</td>
            <td style="padding: 2px 15px;">${payload.amount}</td>
          </tr>
          <tr>
            <td style="text-align: right">Confirmation ID:</td>
            <td style="padding: 2px 15px;">${payload.id}</td>
          </tr>
        </mj-table>

        <mj-divider
          border-color="#cb9e61"
          padding="10px 0px 20px 0px"
        ></mj-divider>

        <mj-text
          padding="0px 10px"
          font-size="12px"
          color="#7f3037"
          font-family="sans"
          align="center"
        >
          SS. Peter & Paul Parish Community
        </mj-text>

        <mj-text
          padding="6px 10px"
          font-size="12px"
          color="#7f3037"
          font-family="sans"
          align="center"
        >
          66 East Main St., Hamburg NY 14075 - 716.649.2765 - Rectory
        </mj-text>

        <mj-text
          padding="0px 10px"
          font-size="12px"
          color="#7f3037"
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
