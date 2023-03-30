import csv
import logging

_logger = logging.getLogger(__name__)

CSV_PATH = "/opt/odoo/clean_code/ex_functions/source.csv"


def convert_csv_to_ascii_table():
    _logger.info(f"Start csv convert into ASCII table for: {CSV_PATH}")
    try:
        with open(CSV_PATH, mode="r") as csv_file:
            csv_reader = csv.reader(csv_file)
            for row in csv_reader:
                print(row)
                _logger.debug(f"Iterating row: {row}")
    except Exception as e:
        _logger.error(f"ERROR: Cannot be converted csv file into ASCII table because: {e}")
    _logger.info(f"End csv convert into ASCII table for: {CSV_PATH}")
