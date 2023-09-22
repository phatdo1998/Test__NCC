import "./App.scss";
import Item from "./components/Item";

function App() {
  return (
    <div className="container__app">
      <div className="container__sidebar">
        <div className="wrapper__sidebar-content">
          <ul className="list__sidebar-content">
            <li className="item__sidebar">Home</li>
            <li className="item__sidebar">Services</li>
            <li className="item__sidebar">News</li>
            <li className="item__sidebar">Blog</li>
            <li className="item__sidebar">Contact</li>
          </ul>
        </div>
      </div>
      <div className="container__content">
        <div className="wrapper__logo">
          <img
            src="https://s3-alpha-sig.figma.com/img/be54/004d/40b2754bf32a69e46f3afbc0bc31cd28?Expires=1696204800&Signature=Hc5Yj3N~BWt6V4XU8gNhW-FN2s1iCDzlcF8TQIxqHUBQZ236240-Yfzolxg2KtsgtbIhYNg3XPEPG8PGjP9wT-cAgKuAVpL8ASPQmMOiJuyXMh15xeZLyoODfDzM2XDzhHM7Rit1DNcg51Lj0piUsLROuGsU8fUNadMcqmPhOqco8ylQyNHOJnd9svjXhdB6SF2EOb0ZZlPZ63pqzpRqypVxfS8~YLdI10U9gKEKsVeWP8vj6kFXC4Ly~gph~TOImYCorXdJSWTzJaT5hjuyksyw265pVqkdalxs-nFxSc7ac6gBBXMPffKegFzX3XGmKnmWqrTJVesEWxYPmrqYWQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="logo"
            className="logo"
          />
        </div>
        <div className="container__slogan">
          <h3 className="slogan__heading">Lorem ipsum dolor sit asmet?</h3>
          <p className="slogan__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tristique consequat placerat. Vestibulum auctor pellentesque sem, eu
            posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
            facilisis, ligula in mattis sodales, augue justo tristique nulla,
            sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
            mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
            convallis. Quisque suscipit maximus vestibulum. Phasellus congue
            mollis orci, sit amet luctus augue tristique eu. Donec vulputate
            odio neque, sed semper turpis pellentesque a.
          </p>
        </div>
        <div className="container__items">
          <div className="wrapper__item">
            <Item icon="https://s3-alpha-sig.figma.com/img/ee5d/7134/af6932e0d359fce7f35402c40d54bc99?Expires=1696204800&Signature=qk5mz-ah1IZ8nHsxer9YmR8Z~d-FLHE9awguREVPKVVN2KhDFFfK-DyXRDKIJ8x36PJEbQk7~DE7IN8g517cOhoKy-kqnfhIr2RS9a5BvhYnJ2k4LVb0f4LcfGRfsZmSMm7gy8p903X5hzhC3l4rlYa1x4kGx~ypKq3c5nFR-hBMZNa2f1Skm~q8PrA3b0oSduILt5F5aM-LQcjiWgkbTdNk2hUeB1bT40i4ddMnaKxgxjjx42Xrayn6LnQiESjtLDBuYgZgCf9lb50o6en57trZ3nlHEsHRSDi1341tdxGfUFITddqwYnSjOwuImlRmJGbPlQmiqSBeTr1CbJJzAA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            <Item icon="https://s3-alpha-sig.figma.com/img/2283/e203/66ceb1e8d5d276758ee00c3663bae8e9?Expires=1696204800&Signature=J01QYZATImvJIu0cg4sbmJAEPeAUkSUh6fPCwc0XlvTwdqj7f7npazl0hdfZqg~eqDQLsZfzqH9WS2AWyfU1DoN99TM89~GaqSX8OhBz7dRf0VO7L9I1XvUgABop~8ypHkAMqw46n20xZWImOhMSldV6UBBtGbKetKDfaCBGMsyJLYBm5ZXONNzpqzrQ9KRBe5l~E2o6e2iTM7lnBSSdGTjmKUDKHQHFOrHiMpTpjWq3FgdsPp4~ku8E5epEGNOhN9~3b4GX8eJnH9Kgj1TIPqBtWd41gclvam06UOuaV1JrOazjvVPJGw3ShVazJQ9iPOAkgp05DaXqnDKiZqj5NQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            <Item icon="https://s3-alpha-sig.figma.com/img/c9c3/230b/112f1704f67d2cb7c852b396cde6858e?Expires=1696204800&Signature=ihgN28zm3IEN1pTb4qfNgSnU4nJFHeMdb5XLu4l0VLVC4QtHU6xN7lqS-9IspQw4qmVEjcdMNmfgyUZf5iNZPPeLTikzgnFGRx94rOKfi1BRJkjew19fpk~XrTIxbZRu5rCI7THmSPb4OXPwcA2Ij6Z0j0XW5O7K~pMoAw6rrDEYGPaP-iJ3XKwklOSKVTPssu4JRwK7YlO66jsNJ9ntraqh9f421skrrrO3RTdkJwmbc0gKJONuHmQPom-4TNhZC8XZ-Gs8wBo-LvAsAjLpiMeoKDKtth-uxDQwQni7NK5yO5CghVvmXPuzHlb9EacK~nu58GtqfveVkqeGcwoZvg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          </div>
        </div>
        <div className="container__footer">
          <div className="wrapper__footer">
            <div className="footer__text">Copyright © 2021</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
