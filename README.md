# DiSco-ALICE Matrices

This is an adapted version of the DESIGMA [(Becker et al., 2014)](#References) that was used for the DiSco-ALICE study [(Hofer et al., in preparation)](#References). It consists of 12 figural matrices items that are presented in order of increasing difficulty. The web app was written in a way that it could be displayed optimally on the iPads used in the current study.

## Technical Details

This matrices test was developed as web app and has no special requirements apart from a modern web browser. Results are saved in a MySQL table.

### Dependencies

- [JQuery](https://github.com/jquery/jquery)
- [Meekro](https://github.com/SergeyTsalkov/meekrodb)

### Installation

1. All files apart from `.gitignore`, `README.md`, and `php/config.template.php` must be copied to the webserver
2. `setup.sql` must be executed to create the database for data colletion
3. Copy `php/config.template.php` to `php/config.php`
4. In `php/config.php` the credentials (host, user, and password) must be changed

## References

Backer, N. & Spinath, F.M. (2014). _DESIGMA - Advanced_ [Measurement instrument]. Hogrefe.
