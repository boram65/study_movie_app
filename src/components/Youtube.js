import "./Youtube.css";
const Youtube = () => {
  return (
    <>
      <div className="yt__main">
        <div className="yt__topview">
          <div className="yt__topview_left">
            <span className="yt__topview_left_time">5:55</span>
          </div>
          <div className="yt__topview_right">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
                width={30}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                />
              </svg>
            </span>
            <span>LTE</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
                width={30}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5h6.75V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="yt__topview_2">
          <span className="yt__topview_2_logo">YouTube</span>
        </div>
      </div>
    </>
  );
};
export default Youtube;
