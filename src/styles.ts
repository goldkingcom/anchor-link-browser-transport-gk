export default `
/* Anchor Link */
:root {
    color-scheme: no-preference;
    background: white;
    color: black;
}
.%prefix% * {
    box-sizing: border-box;
    line-height: 1;
    font-variant-numeric: tabular-nums;
}

.%prefix% {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
        Arial, sans-serif;
    font-size: 13px;
    background: rgba(0, 0, 0, 0.65);
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 2147483647;
    display: none;
    align-items: center;
    justify-content: center;
}

.%prefix%-active {
    display: flex;
}

.%prefix%-inner {
    background: #FFF;
    margin: 20px;
    padding: 24px 0;
    border-radius: 20px;
    box-shadow: 0px 4px 100px rgba(0, 0, 0, .5);
    width: 484px;
    position: relative;
}

.%prefix%-error{
    color: #fc3d39;
    margin-top: 14px;
    line-height: 24px;
}

.%prefix%-close {
    display: block;
    position: absolute;
    top: 28px;
    right: 28px;
    width: 28px;
    height: 28px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M.57 12.1a.96.96 0 000 1.34c.37.36 1 .36 1.34 0L7 8.37l5.09 5.09c.36.35.97.35 1.34-.01a.96.96 0 000-1.34L8.34 7.01l5.08-5.08a.95.95 0 000-1.33.97.97 0 00-1.34-.01L6.99 5.68 1.91.59a.96.96 0 00-1.33 0 .97.97 0 00-.01 1.34l5.09 5.08-5.1 5.1z' fill='%238486A4'/%3E%3C/svg%3E");
    background-size: 14px;
    background-repeat: no-repeat;
    background-position: 50% 7px;
    border-radius: 100%;
    cursor: pointer;
}

.%prefix%-close:hover {
    background-color: white;
}

.%prefix%-version {
    position: absolute;
    top: 19px;
    left: 20px;
    cursor: help;
    color: #B8C0DA;
    opacity: 0.1;
    display: none;
}

.%prefix%-version:hover {
    opacity: 1;
}

.%prefix%-logo {
    width: 70px;
    height: 70px;
    color: #536EF3;
    margin: 0 auto;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 70 70'%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='62.388' y1='4.055' x2='9.311' y2='67.901' gradientTransform='matrix(1 0 0 -1 0 72)'%3E%3Cstop offset='.213' stop-color='%23536ef3'/%3E%3Cstop offset='.995' stop-color='%235d77f7'/%3E%3C/linearGradient%3E%3Cpath d='M35 0c19.3 0 35 15.7 35 35S54.3 70 35 70 0 54.3 0 35 15.7 0 35 0z' fill='url(%23a)'/%3E%3Cpath d='M59.9 49l-22-37.3c-.1-.1-.3-.3-.6-.3h-4.4c-.3 0-.5.2-.6.3L10.1 49c-.1.2-.1.3-.1.4 0 .1 0 .3.1.4l2.2 3.8.2.2h9.2c.3 0 .5-.2.6-.3l2.2-3.8c.1-.1.1-.3.1-.4 0-.1 0-.3-.1-.4l-2-3.4 3.4-5.7 8.2 13.7.1.1.1.1c.1.1.2.1.3.1H57c.3 0 .5-.2.6-.3l2.2-3.7c.1-.1.1-.3.1-.4.1-.1.1-.2 0-.4zm-16.1-9.2l1.2 2.1-2.1 3.5-2.3 3.8v.6l.1.1c.1.1.3.3.6.3h16.4l-1.2 2.1H36.4l7.4-12.5zm-24.9 9.3c-.1.1-.1.2-.1.4s.1.3.1.4l.1.1c.1.1.3.3.6.3h3l-1.3 2.2h-6.9l18.4-31 1.2 2.1-4.1 6.9c-.1.1-.1.3-.1.4 0 .1 0 .3.1.4l6.4 10.8-1.3 2.2-5.9-10.1c-.1-.1-.3-.3-.6-.3s-.5.2-.6.3l-6.7 11-2.3 3.9zm12.6-18.3l3.4-5.8 5.7 9.5-3.5 5.9-5.6-9.6zm-3.2 5.5l5.9 10c.1.2.3.3.5.4.2.1.4.1.5 0 .1 0 .2-.1.3-.2.1-.1.1-.2.2-.3l6.6-11.3c.1-.1.1-.3.1-.4 0-.1 0-.3-.1-.4l-8.8-14.7s-.1-.2-.2-.3c-.1-.1-.3-.2-.5-.2-.3 0-.4.1-.5.2-.1.1-.2.2-.2.3L13 51.6l-1.3-2.2 21.1-35.7 18.4 31.1h-2.5l-4.2-7.1c-.2-.2-.4-.4-.7-.4-.3 0-.5.1-.7.4L35 51.6l-7.9-13.2 1.2-2.1zM46 43.4l.8 1.4h-1.7l.9-1.4zm-1.9 3h8.5c.3 0 .5-.2.6-.3.1-.1.2-.3.2-.5 0-.1 0-.3-.1-.4L34.2 12.9h2.5l21.1 35.7h-15l1.3-2.2zM21 48.7l.8-1.3.8 1.3H21z' fill='%23fff'/%3E%3C/svg%3E");
}
.%prefix%-logo.login {
    width: 119px;
    height: 34px;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkzIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTkzIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2LjU2MSAzOS43MDIxQzE3LjY5NjYgMzkuOTAwMyAxOC44NDcyIDQwIDIwIDQwQzI0LjY1MTUgNDAgMjkuMTU3MyAzOC4zNzg4IDMyLjc0MjQgMzUuNDE1M0MzMy44NzY2IDM0LjQ3NzcgMzQuOTAzOSAzMy40MTc3IDM1LjgwNTkgMzIuMjU0N0MzNC45MTkgMzEuMDY0NSAzMS44MDkgMzIuNjI4MiAzMC41MjM0IDMzLjI3NDZDMzAuNDY3MyAzMy4zMDI4IDMwLjQxNDYgMzMuMzI5MiAzMC4zNjU5IDMzLjM1MzZDMjkuMTQ2MyAzMy45NjM0IDI0LjgxNzEgMzYuNTI0NCAyMC43MzE3IDM3Ljk4NzhDMTguMjQ1NSAzOC44Nzg0IDE1LjcwODUgMzkuMTQyNCAxMy4xMjA3IDM4Ljc3OTZDMTQuMjM3NyAzOS4xODg4IDE1LjM4OTEgMzkuNDk3NSAxNi41NjEgMzkuNzAyMVpNMzcuMTYzNCAzMC4yNjcyQzM2LjIwMDYgMjkuMzQzOCAzMy43OTI1IDI5Ljg4NDggMjkuOTM5IDMxLjg5MDJDMjguNjgxIDMyLjU0NSAyNy40NzE1IDMzLjI2NDYgMjYuMjcyNCAzMy45Nzc5QzIxLjc5MjQgMzYuNjQzNSAxNy40NTkyIDM5LjIyMTcgMTEuMjgzNiAzOC4wMDA2QzEwLjQ3NzQgMzcuNjEwMyA5LjcwNTcxIDM3LjE3MDEgOC45NzEyNyAzNi42ODQ5QzE0LjQ0MTQgMzcuNjU3NyAxNy45MDcxIDM1LjMzNDIgMjQuNDUxMiAyOS41NzMxQzMxLjU4NTQgMjMuMjkyNiAzMy43ODA1IDIyLjUgMzYuODI5MyAyMi4xOTUxQzM3LjQ5NSAyMi4xMjg1IDM4LjAyNTQgMjIuMjQyOSAzOC40MjA3IDIyLjUzODJDMzkuMDQ4MiAyMy4wMDcgMzkuMzM1MiAyMy45MzE2IDM5LjI4MTcgMjUuMzEyQzM4LjgwNDYgMjcuMDQzOSAzOC4wOTQxIDI4LjcxMTUgMzcuMTYzNCAzMC4yNjcyWk02LjA0NTA1IDM0LjMyNzdDNi40OTA3MSAzNC43NjE5IDYuOTU3NzggMzUuMTc2MyA3LjQ0NTIgMzUuNTY5M0M5LjQwMjE5IDM2LjI0MjMgMTEuMDg3MSAzNi4zMzcgMTIuNSAzNS44NTM3QzE0LjgxNzEgMzUuMDYwOSAxNi43MDczIDMzLjg0MTQgMTguOTYzNCAzMS45NTEyQzIxLjIxOTUgMzAuMDYxIDI2LjQwMjQgMjUuMTgyOSAyNy4xOTUxIDI0LjYzNDFDMjcuMjgwMiAyNC41NzUyIDI3LjQxOCAyNC40NzA1IDI3LjYwMiAyNC4zMzExQzI5LjEyODUgMjMuMTcyMyAzMy44MTg1IDE5LjYxMjQgMzcuNjgyOSAxOS45MzlDMzguNTg0NyAyMC4wMTUyIDM5LjMzNTcgMjAuNTY5NSAzOS45MzU5IDIxLjYwMkMzOS45Nzg1IDIxLjA3MDMgNDAgMjAuNTM1OSA0MCAyMEM0MCAxOS4yMjgxIDM5Ljk1NjMgMTguNDY2MyAzOS44NzEyIDE3LjcxNzJDMzguNjg2MSAxMi41MTM3IDM1Ljk1NzggMTIuNTg2MyAzMi45MjY4IDEzLjA0ODhDMjkuMzI5MyAxMy41OTc2IDI1LjA2MSAxNy40MzkgMTkuNjM0MSAyMy43ODA0QzE0LjIwNzMgMzAuMTIxOSAxMi41NjEgMzEuODI5MiAxMC4xODI5IDMzLjQxNDZDOC44NzMwMSAzNC4yODc5IDcuNDkzNzIgMzQuNTkyMiA2LjA0NTA1IDM0LjMyNzdaTTM4Ljc3MDcgMTMuMDgwNUMzOC40NCAxMi4xODM3IDM4LjA0NjggMTEuMzE3MSAzNy41OTYzIDEwLjQ4NTlDMzcuMTkxOCA5Ljk1OTAyIDM2Ljc1MzIgOS40MTA4OSAzNi4yODA1IDguODQxNDZDMzMuNTk3NiA1LjYwOTc2IDMwLjU0ODggNS4xODI5MyAyNi42NDYzIDYuMTU4NTRDMjIuNzQzOSA3LjEzNDE0IDE5LjY5NTEgMTAuODUzNyAxOC4zNTM3IDEyLjMxNzFDMTUuNzkyNyAxNC44MTcxIDEyLjUgMjAuNzkyNyAxMS41ODU0IDIyLjE5NTFDMTAuNjcwNyAyMy41OTc1IDkuOTcxODUgMjUuMTA3OSA3LjQzOTAyIDI4LjcxOTRDNi4xNjkxNyAzMC41MzAxIDQuOTQ2MTggMzEuNTE5NCAzLjc3MDA1IDMxLjY4NzJDNC4yMTY4OCAzMi4zMDc4IDQuNjk5NTkgMzIuOTAzMyA1LjIxNjE1IDMzLjQ3MDVDOC4zODczNCAzNC4xNDc4IDExLjMzNjQgMzAuNjQ0NSAxMi43MTE2IDI5LjAxMDhDMTIuODkzMSAyOC43OTUyIDEzLjA0NzIgMjguNjEyMSAxMy4xNzA3IDI4LjQ3NTZDMTQuMzI5MyAyNy4xOTUxIDIxLjQwMjQgMTguMjkyNyAyMy4xMDk4IDE2Ljc2ODNDMjMuMTM2OCAxNi43NDQxIDIzLjE2NDkgMTYuNzE5IDIzLjE5NCAxNi42OTNDMjUuMDA0MSAxNS4wNzU2IDMwLjgwNDEgOS44OTI0NCAzNS4zMDQ5IDEwLjc5MjdDMzYuNzE3NyAxMS4wNzUzIDM3Ljg3MyAxMS44Mzc5IDM4Ljc3MDcgMTMuMDgwNVpNMS43NjI3MSAyOC4yMTA0QzIuNDIxMDggMjcuOTc4MSAzLjEzNDMzIDI2LjgyNjcgMy45MDI0NCAyNC43NTYxQzUuMzA0ODggMjAuOTc1NiA2Ljg5MDI0IDE3LjA3MzEgNy4zMTcwNyAxNi4wOTc1QzcuNzQzOSAxNS4xMjIgOS4wMjQzOSAxMS4xNTg1IDEyLjMxNzEgNy40MzkwMkMxNS42MDk4IDMuNzE5NTEgMTkuMTQ2MyAwLjc5MjY4MyAyNS45MTQ2IDEuNTI0MzlDMjcuOTExOSAxLjc0MDMzIDMwLjI4NzMgMi44NDQxNCAzMy4wNDEgNC44MzU4NUMzMy43MjM5IDUuNDIzNjYgMzQuMzY2NiA2LjA1NjgzIDM0Ljk2NDQgNi43MzA3M0MzMy44NTg3IDUuNjYwNDkgMzIuNzMyNCA0LjkwMDY1IDMxLjU4NTQgNC40NTEyMkMzMC4wNjEgMy44NDE0NiAyNi41MjQ0IDMuNjU4NTQgMjMuMDQ4OCA1LjYwOTc2QzE5LjU3MzIgNy41NjA5NyAxNS4zNjU5IDEyLjAxMjIgMTEuNTg1NCAxOC43MTk1QzEwLjYwOTggMjAuMTIxOSA3LjM3ODA1IDI2LjE1ODUgNi40NjM0MSAyNy4xOTUxQzYuMjQ3NjMgMjcuNDM5NiA2LjAzNTI1IDI3Ljc3NTggNS44MDU0NCAyOC4xMzk2QzUuMTUxNDcgMjkuMTc0OCA0LjM1NjM5IDMwLjQzMzIgMi45NDA1MSAzMC40MzlDMi41MDE5NSAyOS43MjI0IDIuMTA4NDUgMjguOTc4IDEuNzYyNzEgMjguMjEwNFpNMS4xOTcyNyAyNi44MTc1QzAuODQ2MzQ1IDI1Ljg1MDEgMC41Njg4MjQgMjQuODUyIDAuMzY5Njk0IDIzLjgzMTFDMC4zNjk3NjggMjMuODMwNCAwLjM2OTg0MSAyMy44Mjk2IDAuMzY5OTE0IDIzLjgyODhDMC4xMjM4OCAyMi41Njc0IDAgMjEuMjg1MiAwIDIwQzAgOC45NTQzOSA4Ljk1NDI5IDAgMjAgMEMyMC4zMzQyIDAgMjAuNjY4MyAwLjAwODI4OTM0IDIxLjAwMjEgMC4wMjUxMTk4QzIxLjAwMyAwLjAyNDk1NTcgMjEuMDAzOCAwLjAyNDg3NTYgMjEuMDA0NyAwLjAyNDg3NTZDMjEuNzk1IDAuMDYzOSAyMi41NzMzIDAuMTQ4Nzc3IDIzLjMzNjkgMC4yNzcwNjlDMjIuMzYwOSAwLjIzODg1NyAyMS42MzQ4IDAuMjQ4MTMxIDIxLjE1ODUgMC4zMDQ4NzhDMTguNTk3NiAwLjYwOTc1NiAxNC4wMjQ0IDEuNTg1MzcgOC45NjM0MiA5LjAyNDM5QzcuMDEyMiAxMS40MDI0IDUuMTIxOTUgMTcuNDM5IDQuNjk1MTIgMTguNDE0NkM0LjI2ODI5IDE5LjM5MDIgMy4yMzE3MSAyMi41NjEgMi45ODc4IDIzLjE3MDdDMi45NDY0MSAyMy4yNzQyIDIuODg1NjggMjMuNDU1IDIuODA5MiAyMy42ODI3QzIuNDc0IDI0LjY4MDcgMS44MzYyMiAyNi41Nzk2IDEuMTk3MjcgMjYuODE3NVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl80NjM5XzM4KSIvPgo8cGF0aCBkPSJNNjcuNzgzNSA4LjQ5NDcxTDY3LjkwNTIgOC4wMDk3NEw2Ny43ODM1IDguNDk0NzFDNjguNzc4OSA4Ljc0NDQxIDY5LjY1NjkgOS4wOTE1NCA3MC40MjE5IDkuNTMyNDJMNjkuMzgwMSAxMi4yMzU0QzY3Ljk1MyAxMS40MDM1IDY2LjIzNyAxMC45OTk2IDY0LjI1NTMgMTAuOTk5NkM2Mi4xMjQzIDEwLjk5OTYgNjAuNDI1NSAxMS40NzM3IDU5LjI0MzcgMTIuNTA1QzU4LjA0OTkgMTMuNTQ2NiA1Ny40ODg1IDE1LjA2MTQgNTcuNDg4NSAxNi45NTg5VjE5LjAzMjFWMTkuNTMyMUg1Ny45ODg1SDY3Ljk5MDVWMjIuMzMyOUg1Ny45ODg1SDU3LjQ4ODVWMjIuODMyOVYzMS41OTNINTQuMDEyMlYxNi45NTg5QzU0LjAxMjIgMTQuMTQ5OCA1NC45MDQ5IDExLjk5NzcgNTYuNjUxNSAxMC40Mzg2QzU4LjQwNTQgOC44NzI5NiA2MC44NTAxIDguMDYwNTUgNjQuMDQ4NyA4LjA2MDU1QzY1LjM4OTggOC4wNjA1NSA2Ni42MzQgOC4yMDYzMyA2Ny43ODM1IDguNDk0NzFaTTc1LjAxNjMgMjIuMTI4NVY4LjM1ODE0SDc4LjQ5MjdMNzguNDkyNyAyMS41MzVMNzguNDkyNyAyMS41MzZDNzguNDk3NSAyMy45MDI1IDc5LjA5MTMgMjUuNzczNyA4MC4zNTgzIDI3LjA1NzhDODEuNTUxNiAyOC4yNjczIDgzLjEyMTMgMjguODg3MSA4NS4wMTk3IDI4Ljk0NjlMODUuMDM1NSAyOC45NDc0TDg1LjA1MTIgMjguOTQ2OUM4Ni45NDk4IDI4Ljg4NyA4OC41MTk2IDI4LjI2NzIgODkuNzEyOSAyNy4wNTc4QzkwLjk3OTkgMjUuNzczNyA5MS41NzM3IDIzLjkwMjYgOTEuNTc4NSAyMS41MzZWMjEuNTM1VjguMzU4MTVMOTUuMDU0NyA4LjM1ODI1VjIyLjEyODVDOTUuMDU0NyAyNS4zMTk0IDk0LjI2MDUgMjcuNzExIDkyLjc0MDggMjkuMzc1N0M5MS4yMjI3IDMxLjAzODcgODkuMTI4OSAzMS44OTA4IDg2LjM5NTcgMzEuODkwOEg4My42NzU1QzgwLjk0MjMgMzEuODkwOCA3OC44NDg1IDMxLjAzODcgNzcuMzMwNCAyOS4zNzU3TDc3LjMzMDQgMjkuMzc1N0M3NS44MTA1IDI3LjcxMSA3NS4wMTYzIDI1LjMxOTQgNzUuMDE2MyAyMi4xMjg1Wk0xNDcuNjg0IDMwLjM5MjRMMTQ3LjQ0NSAzMC44MzE5TDE0Ny42ODQgMzAuMzkyNEMxNDUuNzg4IDI5LjM2MzYgMTQ0LjMwNSAyNy45NDExIDE0My4yMjcgMjYuMTE5OUMxNDIuMTUxIDI0LjMwMTYgMTQxLjYxIDIyLjI2NTUgMTQxLjYxIDE5Ljk5OTZDMTQxLjYxIDE3LjczMzYgMTQyLjE1MSAxNS42OTc2IDE0My4yMjcgMTMuODc5MkMxNDQuMzA1IDEyLjA1OCAxNDUuNzg4IDEwLjYzNTUgMTQ3LjY4NCA5LjYwNjc0TDE0Ny40NDUgOS4xNjcyNUwxNDcuNjg0IDkuNjA2NzNDMTQ5LjU3OCA4LjU3ODk1IDE1MS43MSA4LjA2MDU1IDE1NC4wOTEgOC4wNjA1NUMxNTYuNDcyIDguMDYwNTUgMTU4LjYwNCA4LjU3ODk1IDE2MC40OTggOS42MDY3M0MxNjIuMzk1IDEwLjYzNTkgMTYzLjg3OCAxMi4wNTMzIDE2NC45NTUgMTMuODYzMUMxNjYuMDMgMTUuNjY4NSAxNjYuNTcyIDE3LjcwOTYgMTY2LjU3MiAxOS45OTk2QzE2Ni41NzIgMjIuMjg5NSAxNjYuMDMgMjQuMzMwNiAxNjQuOTU1IDI2LjEzNkMxNjMuODc4IDI3Ljk0NTkgMTYyLjM5NSAyOS4zNjMyIDE2MC40OTggMzAuMzkyNEMxNTguNjA0IDMxLjQyMDIgMTU2LjQ3MiAzMS45Mzg2IDE1NC4wOTEgMzEuOTM4NkMxNTEuNzEgMzEuOTM4NiAxNDkuNTc4IDMxLjQyMDIgMTQ3LjY4NCAzMC4zOTI0Wk0xNzUuOCAxOC43MjIzVjMxLjg5MDZIMTcyLjMyNFYxOC4xMjAzQzE3Mi4zMjQgMTQuOTA0MiAxNzMuMTEzIDEyLjUwNzggMTc0LjYyMSAxMC44NTU3QzE3Ni4xMjUgOS4yMDY4NSAxNzguMjM0IDguMzU4MTQgMTgxLjAxNyA4LjM1ODE0TDE4MS42ODEgOC4zNTgyMUwxODIuNDEyIDguMzU4MjRMMTgzLjgwNiA4LjM1ODE0QzE4Ni41OSA4LjM1ODE0IDE4OC42OTkgOS4yMDY4NSAxOTAuMjAzIDEwLjg1NTdDMTkxLjcxIDEyLjUwNzggMTkyLjUgMTQuOTA0MiAxOTIuNSAxOC4xMjAzVjMxLjg5MDZIMTg5LjAyNFYxOC43MjIzVjE4LjcyMTVDMTg5LjAyIDE2LjM0OTYgMTg4LjQyIDE0LjQ3NDcgMTg3LjEzOSAxMy4xODkyQzE4NS45MzkgMTEuOTg1NCAxODQuMzUzIDExLjM2NzggMTgyLjQyOSAxMS4zMDI5TDE4Mi40MTIgMTEuMzAyM0wxODIuMzk1IDExLjMwMjlDMTgwLjQ3MSAxMS4zNjc4IDE3OC44ODQgMTEuOTg1MyAxNzcuNjg1IDEzLjE4OTFDMTc2LjQwNCAxNC40NzQ3IDE3NS44MDMgMTYuMzQ5NiAxNzUuOCAxOC43MjE1VjE4LjcyMjNaTTEwNi4wMDQgMjguMjkyM1YyOC43OTIzSDEwNi41MDRIMTE4LjYwN1YzMS41OTNIMTAyLjUyOFY4LjQwNjA4SDEwNi4wMDRWMjguMjkyM1pNMTI2LjYzIDI4LjI5MjNWMjguNzkyM0gxMjcuMTNIMTM5LjIzMlYzMS41OTNIMTIzLjE1NFY4LjQwNjA4SDEyNi42M1YyOC4yOTIzWk0xNDkuNTA2IDI3Ljg0NjZMMTQ5Ljc1MiAyNy40MTEyTDE0OS41MDcgMjcuODQ2NkMxNTAuODc0IDI4LjYxODIgMTUyLjQwNiAyOC45OTk2IDE1NC4wOTEgMjguOTk5NkMxNTUuNzc2IDI4Ljk5OTYgMTU3LjMwOCAyOC42MTgyIDE1OC42NzUgMjcuODQ2NkMxNjAuMDQxIDI3LjA3NTYgMTYxLjExNiAyNS45OTYgMTYxLjg5NSAyNC42MTYzQzE2Mi42NzUgMjMuMjMzOSAxNjMuMDYxIDIxLjY5MTEgMTYzLjA2MSAxOS45OTk2QzE2My4wNjEgMTguMzA4IDE2Mi42NzUgMTYuNzY1MiAxNjEuODk1IDE1LjM4MjlDMTYxLjExNiAxNC4wMDMxIDE2MC4wNDEgMTIuOTIzNSAxNTguNjc1IDEyLjE1MjZDMTU3LjMwOCAxMS4zODA5IDE1NS43NzYgMTAuOTk5NiAxNTQuMDkxIDEwLjk5OTZDMTUyLjQwNiAxMC45OTk2IDE1MC44NzQgMTEuMzgwOSAxNDkuNTA3IDEyLjE1MjZMMTQ5Ljc1MiAxMi41ODhMMTQ5LjUwNiAxMi4xNTI2QzE0OC4xNDEgMTIuOTIzNSAxNDcuMDY2IDE0LjAwMzEgMTQ2LjI4NyAxNS4zODI5QzE0NS41MDcgMTYuNzY1MiAxNDUuMTIgMTguMzA4IDE0NS4xMiAxOS45OTk2QzE0NS4xMiAyMS42OTExIDE0NS41MDcgMjMuMjMzOSAxNDYuMjg3IDI0LjYxNjNDMTQ3LjA2NiAyNS45OTYgMTQ4LjE0MSAyNy4wNzU2IDE0OS41MDYgMjcuODQ2NloiIGZpbGw9IiM4NTExRjkiIHN0cm9rZT0iYmxhY2siLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl80NjM5XzM4IiB4MT0iNy44ODg4OCIgeTE9IjM2LjE4NzkiIHgyPSIzMy4wMDkxIiB5Mj0iNC44MjUwMyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjNjA0QUQwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzNCQjVGRiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=");
}

.%prefix%-logo.loading {
    border-radius: 100%;
    background-color: #3650A2;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0.5 0.5 45 45' xmlns='http://www.w3.org/2000/svg' stroke='%23fff'%3E%3Cg fill='none' fill-rule='evenodd' transform='translate(1 1)' stroke-width='2'%3E%3Ccircle cx='22' cy='22' r='6' stroke-opacity='0'%3E%3Canimate attributeName='r' begin='1.5s' dur='3s' values='6;22' calcMode='linear' repeatCount='indefinite' /%3E%3Canimate attributeName='stroke-opacity' begin='1.5s' dur='3s' values='1;0' calcMode='linear' repeatCount='indefinite' /%3E%3Canimate attributeName='stroke-width' begin='1.5s' dur='3s' values='2;0' calcMode='linear' repeatCount='indefinite' /%3E%3C/circle%3E%3Ccircle cx='22' cy='22' r='6' stroke-opacity='0'%3E%3Canimate attributeName='r' begin='3s' dur='3s' values='6;22' calcMode='linear' repeatCount='indefinite' /%3E%3Canimate attributeName='stroke-opacity' begin='3s' dur='3s' values='1;0' calcMode='linear' repeatCount='indefinite' /%3E%3Canimate attributeName='stroke-width' begin='3s' dur='3s' values='2;0' calcMode='linear' repeatCount='indefinite' /%3E%3C/circle%3E%3Ccircle cx='22' cy='22' r='8'%3E%3Canimate attributeName='r' begin='0s' dur='1.5s' values='6;1;2;3;4;5;6' calcMode='linear' repeatCount='indefinite' /%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");
}

.%prefix%-logo.error {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='70' height='70' fill='none'%3E%3Ccircle cx='35' cy='35' r='35' fill='%23fc3d39'/%3E%3Cpath fill-rule='evenodd' d='M32.88 17.614c.715-.403 1.522-.614 2.343-.614s1.628.212 2.343.614 1.314.983 1.74 1.685l.005.008 13.483 22.508.013.022c.417.722.638 1.541.64 2.375s-.214 1.654-.627 2.378-1.008 1.328-1.727 1.751-1.535.65-2.369.659h-.017-26.983c-.834-.009-1.651-.237-2.369-.659s-1.314-1.027-1.727-1.751-.629-1.544-.627-2.378.223-1.653.64-2.375l.013-.022L31.14 19.299c.426-.702 1.025-1.282 1.74-1.685zm2.343 2.569a1.59 1.59 0 0 0-1.359.763L20.392 43.438a1.59 1.59 0 0 0-.208.782c-.001.278.071.551.209.793a1.59 1.59 0 0 0 1.358.803h26.945a1.59 1.59 0 0 0 1.358-.803 1.59 1.59 0 0 0 .209-.793c-.001-.274-.073-.544-.208-.782L36.584 20.95c-.144-.236-.343-.428-.58-.561a1.59 1.59 0 0 0-.781-.205zm0 6.531a1.59 1.59 0 0 1 1.592 1.592v6.367a1.59 1.59 0 1 1-3.184 0v-6.367a1.59 1.59 0 0 1 1.592-1.592zm-1.592 14.326a1.59 1.59 0 0 1 1.592-1.592h.016a1.59 1.59 0 1 1 0 3.184h-.016a1.59 1.59 0 0 1-1.592-1.592z' fill='%23fff'/%3E%3C/svg%3E");
}

.%prefix%-logo.warning {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='70' height='70' fill='none' %3E%3Ccircle cx='35' cy='35' r='35' fill='%23f8b826'/%3E%3Cpath d='M35 20c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15zM16.667 35c0-10.125 8.208-18.333 18.333-18.333S53.333 24.875 53.333 35 45.125 53.334 35 53.334 16.667 45.126 16.667 35zM35 26.667c.921 0 1.667.746 1.667 1.667V35A1.67 1.67 0 0 1 35 36.667c-.921 0-1.667-.746-1.667-1.667v-6.667c0-.921.746-1.667 1.667-1.667zm-1.667 15A1.67 1.67 0 0 1 35 40h.017c.921 0 1.667.746 1.667 1.667s-.746 1.667-1.667 1.667H35a1.67 1.67 0 0 1-1.667-1.667z' fill-rule='evenodd' fill='%23fff'/%3E%3C/svg%3E");
}

.%prefix%-logo.success {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 70 70'%3E%3Cdefs/%3E%3Ccircle cx='35' cy='35' r='35' fill='%233DC55D'/%3E%3Cpath fill='%23fff' d='M30.9 49.7a2 2 0 001.8-1L48 24.9c.3-.5.4-1 .4-1.4 0-1-.7-1.7-1.7-1.7-.8 0-1.2.3-1.6 1L30.8 45.4 23.5 36c-.5-.6-1-.9-1.6-.9-1 0-1.8.8-1.8 1.8 0 .4.2.9.6 1.3L29 48.7c.6.7 1.1 1 1.9 1z'/%3E%3C/svg%3E");
}

.%prefix%-logo.fuel {
    background-image: url("data:image/svg+xml,%3Csvg width='70' height='70' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0)'%3E%3Cpath d='M69.23 30.31l-8.46-11a6.58 6.58 0 00-3.4-2.19L35.91 12.1a7.16 7.16 0 00-1.6-.16 7.73 7.73 0 00-2.18.28l-5.1 1.57a1.76 1.76 0 00-.17-1.4l-1.46-2.5a1.76 1.76 0 00-2.06-.8l-9.98 3.2a1.76 1.76 0 00-1.23 1.74l.13 3.39c.01.27.09.54.22.78l-2.28.7a5.85 5.85 0 00-3.24 2.7L.48 34.23a4.96 4.96 0 00.14 4.53l3.5 5.83a4.49 4.49 0 004.19 2.05l9.29-1.13a4.79 4.79 0 002.54 3.78l3.55 1.68a8.9 8.9 0 003.39.73h.27l8.06-.45c.26.04.5.13.73.28l8.02 8c1 .92 2.3 1.45 3.67 1.47.14 0 .28 0 .42-.03l6.6-.68a2.85 2.85 0 002.5-1.8c.36-1 .1-2.12-.73-3l-2.78-2.96 5.26-1.56a4.35 4.35 0 003-3.64l.41-4.29c.09-.42.26-.82.52-1.16l6-6.66a3.91 3.91 0 00.2-4.9z' fill='%23fff'/%3E%3Cpath d='M49.08 29.96a1.72 1.72 0 00-.92-2.25 1.72 1.72 0 00-1.3 3.17 1.7 1.7 0 002.22-.92zM27.54 26.41a1.02 1.02 0 001-1.23 1.02 1.02 0 00-1.85-.37 1.03 1.03 0 00.46 1.52c.12.05.25.08.39.08zM37.05 21.67a1.03 1.03 0 000-2.06 1.03 1.03 0 000 2.06zM21.54 35c-4.62 0-10.44 2.04-13.52 3.24a.68.68 0 00-.24.16.68.68 0 00-.18.53c.01.1.04.19.1.27l1.28 2.16c.07.1.17.2.28.25.11.06.24.08.37.07l9.15-1.13.45-.03a3.64 3.64 0 013.67 3.55v.3a.67.67 0 00.39.59l2.9 1.38c.42.16.86.26 1.3.28h.05l7.74-.45h.23c1.45.03 2.83.59 3.9 1.58l7.68 7.65c.1.06.22.1.35.12l1.67-.2c.06-.01.12-.03.16-.07a.32.32 0 00.1-.13.33.33 0 00-.03-.33l-.82-1.21a3.22 3.22 0 01-.01-4.58c.4-.4.9-.68 1.45-.82l6.47-1.92a.4.4 0 00.19-.13.41.41 0 00.08-.22l.35-3.53c.01-.06 0-.13-.02-.2a.41.41 0 00-.28-.24.37.37 0 00-.2.01c-2.27.62-6.27 1.6-8.73 1.6C37.4 43.53 29.68 35 21.54 35zm8.97 7.49a.8.8 0 01-.27.28c-.2.13-.45.19-.68.17a1.05 1.05 0 01-.77-1.62.73.73 0 01.28-.28 1.05 1.05 0 011.44 1.45zm17.6 3.72a.76.76 0 01-.27.28 1.05 1.05 0 01-1.17-1.73 1.05 1.05 0 011.32.13 1.04 1.04 0 01.13 1.32z' fill='%23F8B826'/%3E%3Cpath d='M21.54 35c-4.85 0-11.03 2.25-13.96 3.42a.29.29 0 00-.15.16c-.01.03-.02.07-.01.11 0 .04.01.07.03.1L9 41.38c.06.11.16.2.27.26.12.05.25.07.37.06l9.15-1.13c.15-.02.3-.02.46-.03a3.63 3.63 0 013.66 3.54l.02.56c0 .04.02.09.05.13.02.04.06.07.1.1l3.13 1.48c.41.16.85.26 1.3.28h.04l7.74-.45h.23c1.45.03 2.84.59 3.9 1.58l7.68 7.65c.1.06.23.1.35.12l2.22-.27-1.58-1.66c-.82-.88-.7-2.05-.4-3.13a3.28 3.28 0 012.3-2.27l6.71-2 .38-3.8.06-.58c-2.13.59-6.6 1.74-9.3 1.74C37.4 43.54 29.69 35 21.54 35zm8.89 7.62a.38.38 0 01-.07.07c-1.07.77-2.26-.42-1.49-1.5a.25.25 0 01.06-.07c1.08-.77 2.27.42 1.5 1.5zm17.6 3.72a.25.25 0 01-.06.06c-1.07.78-2.26-.42-1.49-1.5a.25.25 0 01.07-.06c1.07-.78 2.26.42 1.49 1.5z' fill='%23E99123'/%3E%3Cpath d='M47.53 34.9c-10.41 0-19.22-4.65-25.54-4.65-4.44 0-11.97 3.38-15.28 5.83a.55.55 0 00-.18.69l.35.78a.55.55 0 00.72.28c2.84-1.18 8.9-3.42 13.94-3.42 8.4 0 16.15 7.48 25.16 7.48 4 0 9.88-1.58 11.41-2.82.67-.7 2.86-3.32 4.4-4.93a.67.67 0 00.1-.8.67.67 0 00-.32-.28.65.65 0 00-.42-.03 64.85 64.85 0 01-14.34 1.86zm-.47 3.95c-.14.3-.38.55-.68.7a1.73 1.73 0 01-2.34-2.36c.14-.3.38-.55.68-.7a1.72 1.72 0 012.04.32 1.75 1.75 0 01.3 2.04z' fill='%23F8B826'/%3E%3Cpath d='M68.34 30.87l-8.46-11a5.52 5.52 0 00-2.77-1.78l-21.46-5.03a7.08 7.08 0 00-3.2.1l-7.55 2.3-.01.01h-.01l-.5-1.3v-.01l1.13-.4a.65.65 0 00.36-.93l-1.47-2.5a.64.64 0 00-.73-.27l-9.98 3.17a.64.64 0 00-.44.63l.13 3.39a.64.64 0 00.63.6c.07 0 .15-.02.22-.04l2.53-.91h.02l.44.87v.02l-6.7 2.05c-1.08.38-2 1.15-2.56 2.15L1.47 34.61a3.8 3.8 0 00.11 3.43l3.5 5.84a3.32 3.32 0 003.1 1.51l10.23-1.26a.2.2 0 01.2.04.2.2 0 01.06.08l.02.1.03.9a3.69 3.69 0 001.9 2.88l3.56 1.69c.98.42 2.05.63 3.12.61l8.06-.44c.58.02 1.13.23 1.57.6l8.03 8a4.38 4.38 0 003.18 1.12l6.6-.69c.77-.07 1.33-.46 1.55-1.07.23-.6.05-1.26-.48-1.82l-4.02-4.26-.01-.01v-.01l7-2.09a3.25 3.25 0 002.2-2.66l.43-4.3a4 4 0 01.8-1.81l6.01-6.67a2.76 2.76 0 00.12-3.45zM15.14 15.2l-.03-.51c0-.08.02-.16.06-.22.04-.07.1-.11.18-.14l7.73-2.5a.35.35 0 01.41.16l.13.23c.03.05.04.1.05.15 0 .05 0 .1-.02.14a.35.35 0 01-.08.13.38.38 0 01-.12.09L15.6 15.5a.34.34 0 01-.31-.04.36.36 0 01-.16-.27zm51.53 17.75l-6 6.66a5.95 5.95 0 00-1.32 3l-.42 4.3a1.22 1.22 0 01-.73.87l-7.32 2.17a1.8 1.8 0 00-1.34 2.28c.1.32.27.6.52.83l3.19 3.37a.4.4 0 01.09.43.42.42 0 01-.14.19.42.42 0 01-.21.08l-5.06.53c-.55 0-1.09-.19-1.51-.54l-8.03-8a4.62 4.62 0 00-3.14-1.2l-8.07.45c-.73.01-1.45-.13-2.12-.41l-3.56-1.7a1.4 1.4 0 01-.72-1.08l-.04-.9a2.35 2.35 0 00-.8-1.68 2.24 2.24 0 00-1.78-.53L7.92 43.32a1.32 1.32 0 01-1.07-.53l-3.49-5.82a1.78 1.78 0 01-.05-1.4L9.8 22.94c.32-.5.78-.89 1.33-1.1l21.94-6.67c.69-.18 1.42-.2 2.12-.07l21.46 5.02c.62.19 1.18.55 1.6 1.03l8.47 11c.08.11.12.25.12.4a.69.69 0 01-.16.39z' fill='%2329363F'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Cpath fill='%23fff' transform='translate(0 9)' d='M0 0h70v52H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
}

.%prefix%-request {
    padding: 20px 52px;
    border-radius: 20px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    background: white;
}
.%prefix%-request.login{
    padding-top: 0;
    padding-bottom: 0;
}
.%prefix%-info {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.%prefix%-title {
    color: #000000;
    font-size: 25px;
    margin: 20px auto;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0.5px;
}

.%prefix%-subtitle {
    margin-top: 14px;
    color: #8486A4;
    text-align: center;
    line-height: 1.4;
    word-break: break-word;
    font-size: 16px;
}

.%prefix%-subtitle a {
    color: #000000;
    cursor: pointer;
    text-decoration: underline;
}

.%prefix%-manual {
    color: #007AFF;
    cursor: pointer;

}

.%prefix%-info hr {
    border: 0;
    height: 1px;
    width: 100%;
    background: #EFF1F7;
    margin: 24px 0 14px;
}

.%prefix%-uri {
    width: 100%;
}

.%prefix%-button {
    color: #FFF;
    background: #536EF3;
    text-decoration: none;
    font-weight: 500;
    font-size: 16px;
    flex-grow: 1;
    flex: 1;
    width: 100%;
    line-height:  40px;
    height: 40px;
    border-radius: 8px;
    text-align: center;
    display: block;
    margin-top: 14px;
    cursor: pointer;
    display:none;
}

.%prefix%-button:hover {
  background:
}

.%prefix%-qr {
    position: relative;
    width: 100%;
    margin-top: 14px;
    border-radius: 12px;
    background: #FFFFFF;
    transition: all 400ms ease-in-out;
    transform: scale(1) translateY(0);
}

.%prefix%-qr svg {
    width: 100%;
    display: block;
    cursor: zoom-in;
    shape-rendering: crispEdges;
}

.%prefix%-qr.zoom {
    transform: scale(2) translateY(-25px);
    border: 2px solid #536EF3;
    box-sizing: border-box;
    box-shadow: 0px 4px 154px rgba(0, 0, 0, 0.35);
    border-radius: 8px;
    padding: 5px;
    z-index: 2147483647;
}

.%prefix%-qr.zoom svg {
    cursor: zoom-out;
}

.%prefix%-qr svg rect {
    fill: black;
}

.%prefix%-copy {
    margin-top:14px;
    width: 100%;
    color: #8486A4;
    text-align: center;
    opacity: 1;
    transition: all 200ms ease-in-out;
    transition-delay: 400ms;
    font-size:14px;
}

.%prefix%-qr.zoom .%prefix%-copy {
    transition-delay: 0ms;
    background: transparent;
    opacity: 0;
}

.%prefix%-copy span,
.%prefix%-copy a {
    display: inline-block;
    background: white;
    padding: 0 20px;
    color: #8486A4;
    cursor: pointer;
    text-decoration: none;
}

.%prefix%-copy span {
    display: none;
    color: #5C5C5C;
    cursor: default;
}

.%prefix%-copy.copied a {
    display: none;
}

.%prefix%-copy.copied span {
    display: inline-block;
}

.%prefix%-download{
    color: #070847;
    font-size: 14px;
    margin-top:18px;
}

.%prefix%-download a{
    color: #536EF3;
    text-decoration: none;
}

// .%prefix%-copy span:before,
// .%prefix%-copy a:before {
//     content: '';
//     display: inline-block;
//     width: 26px;
//     height: 16px;
//     position: relative;
//     top: 2px;
//     background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='17' fill='none'%3E%3Cg clip-path='url(%23A)' stroke='%23157efa' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='M13.83 6.5h-6c-.73 0-1.33.6-1.33 1.33v6c0 .74.6 1.34 1.33 1.34h6c.74 0 1.34-.6 1.34-1.34v-6c0-.73-.6-1.33-1.34-1.33z'/%3E%3Cpath d='M3.83 10.5h-.66a1.33 1.33 0 01-1.34-1.33v-6a1.33 1.33 0 011.34-1.34h6a1.33 1.33 0 011.33 1.34v.66' stroke-linecap='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='A'%3E%3Cpath fill='%23fff' transform='translate(.5 .5)' d='M0 0h16v16H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
//     background-repeat: no-repeat;
// }

.%prefix%-copy span:before {
    background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.33 4L6 11.33 2.67 8' stroke='%23157EFA' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    top: 3.5px;
}

.%prefix%-footnote {
    text-align: center;
    width: 100%;
    position: absolute;
    bottom: -26px;
    left: 0;
    color: white;
    display: none;
}

.%prefix%-footnote  .%prefix%-download {
    color: white;
}

.%prefix%-wskeepalive {
    display: none;
}


// @media (prefers-color-scheme: dark) {
//     .%prefix%-info hr,
//     .%prefix%-inner {
//         background: #262D43;
//         color: white;
//     }
//     .%prefix%-request,
//     .%prefix%-qr a,
//     .%prefix%-qr span,
//     .%prefix%-qr {
//         background: #131B33;
//     }
//     .%prefix%-title {
//         color: #FCFCFC;
//     }
//     .%prefix%-qr span,
//     .%prefix%-subtitle {
//         color: #B8C0DA;
//     }
//     .%prefix%-subtitle a {
//         color: #FCFCFC;
//     }
//     .%prefix%-qr svg rect {
//         fill: white;
//     }
//     .%prefix%-version {
//         color: #546AAF;
//     }
//     .%prefix%-qr a,
//     .%prefix%-manual,
//     .%prefix%-button {
//         color: #FCFCFC;
//     }
//     .%prefix%-button {
//         background: #262D43;
//         border: 1px solid #262D43;
//     }
//     .%prefix%-qr {
//         border-color: #262D43;
//     }
//     .%prefix%-qr.zoom {
//         border-color: #536EF3;
//     }
//     .%prefix%-copy a:before {
//         background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='17' fill='none'%3E%3Cg clip-path='url(%23A)' stroke='%23fff' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='M13.83 6.5h-6c-.73 0-1.33.6-1.33 1.33v6c0 .74.6 1.34 1.33 1.34h6c.74 0 1.34-.6 1.34-1.34v-6c0-.73-.6-1.33-1.34-1.33z'/%3E%3Cpath d='M3.83 10.5h-.66a1.33 1.33 0 01-1.34-1.33v-6a1.33 1.33 0 011.34-1.34h6a1.33 1.33 0 011.33 1.34v.66' stroke-linecap='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='A'%3E%3Cpath fill='%23fff' transform='translate(.5 .5)' d='M0 0h16v16H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
//     }
//     .%prefix%-copy span:before {
//         background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.33 4L6 11.33 2.67 8' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
//     }
//     .%prefix%-button:hover {
//         color: #FCFCFC;
//         border: 1px solid #FCFCFC;
//         background: #333A50;
//     }
//     .%prefix%-close {
//         background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M.57 12.1a.96.96 0 000 1.34c.37.36 1 .36 1.34 0L7 8.37l5.09 5.09c.36.35.97.35 1.34-.01a.96.96 0 000-1.34L8.34 7.01l5.08-5.08a.95.95 0 000-1.33.97.97 0 00-1.34-.01L6.99 5.68 1.91.59a.96.96 0 00-1.33 0 .97.97 0 00-.01 1.34l5.09 5.08-5.1 5.1z' fill='%23FCFCFC'/%3E%3C/svg%3E");
//     }
//     .%prefix%-close:hover {
//         background-color: black;
//     }
// }

// @media (max-height: 600px) { .%prefix%-inner { transform: scale(0.9); } }
@media (max-height: 540px) { .%prefix%-inner { transform: scale(0.8); } }
@media (max-height: 480px) { .%prefix%-inner { transform: scale(0.7); } }
@media (max-height: 420px) { .%prefix%-inner { transform: scale(0.6); } }
@media (max-height: 360px) { .%prefix%-inner { transform: scale(0.5); } }
@media (max-height: 300px) { .%prefix%-inner { transform: scale(0.4); } }

@media (max-width: 600px) and (orientation: portrait) {
    .%prefix%-qr.zoom {
        transform: scale(1.5) translateY(-25px);
    }
    .%prefix%-info .%prefix%-download {
        display:none;
    }
    .%prefix%-button {
        display: block;
    }

    .%prefix%-footnote  {
        display: block;
    }

    .%prefix%-request{
        padding-left: 24px;
        padding-right: 24px;
    }
    .%prefix%-subtitle{
        font-size: 14px;
    }
    .%prefix%-close{
        display: none;
    }
}

@media (max-width: 450px) and (orientation: portrait) {
    .%prefix%-qr.zoom {
        transform: scale(1.3) translateY(-25px);
    }
}

`
