const mjml2html = require("mjml");

module.exports = (payload) => {
  return mjml2html(`
<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-image
          padding="0px 10px 10px 10px"
          height="150px"
          width="194px"
          src="https://firebasestorage.googleapis.com/v0/b/sspp-production.appspot.com/o/static%2Fsspp_school_logo.png?alt=media&token=a404ab05-43e6-42f4-acef-b3875ac0f254"
        ></mj-image>

        <mj-divider
          border-color="#1c462c"
          padding="10px 0px 20px 0px"
        ></mj-divider>

        <mj-text font-size="18px">
          We're sorry, but we ran into a problem processing your payment for tickets.
        </mj-text>

        <mj-text font-size="18px">
          Please contact ${payload.adminEmail} for assistance, also CC'd on this message.
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
