package com.example;

import com.ibm.icu.text.BreakIterator;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * App class reads a CSV file and prints an ASCII table with aligned columns.
 * 
 * @author Mario Nogueira
 * 
 */
public class App {

    private static final String CSV_FILE = "source.csv";
    private static final String CSV_SEPARATOR = ";";
    private static final String BAR_TABLE = "|";
    private static final String BLANK_SPACE = " ";
    private static final String PLUS = "+";
    private static final String HYPHEN = "-";

    /**
     * The main method of the application.
     *
     * @param args Command-line arguments (not used)
     */
    public static void main(String[] args) {
        List<List<String>> records = readCSV(CSV_FILE, CSV_SEPARATOR);
        printASCIITable(records);
    }

    /**
     * Reads a CSV file and stores the content in a list of lists of strings.
     *
     * @param csvFile   The path to the CSV file
     * @param separator The field separator used in the CSV file
     * @return A list of lists of strings representing the rows and fields of the CSV file
     */
    public static List<List<String>> readCSV(String csvFile, String separator) {
        List<List<String>> records = new ArrayList<>();
        String line;
    
        try (InputStream inputStream = App.class.getClassLoader().getResourceAsStream(csvFile);
             BufferedReader br = new BufferedReader(new InputStreamReader(inputStream))) {
            while ((line = br.readLine()) != null) {
                String[] fields = line.split(separator);
                records.add(Arrays.asList(fields));
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    
        return records;
    }

     /**
     * Prints an ASCII table with aligned columns based on the provided list of lists of strings.
     *
     * @param records A list of lists of strings representing the rows and fields of the table
     */
    public static void printASCIITable(List<List<String>> records) {
        List<Integer> maxFieldLengths = getMaxFieldLengths(records);

        String separatorRow = buildSeparatorRow(maxFieldLengths);
        int rowIndex = 0;
        for (List<String> record : records) {
            for (int i = 0; i < record.size(); i++) {
                String field = record.get(i);
                int padding = maxFieldLengths.get(i) - getVisualLength(field);
                System.out.print(BAR_TABLE + BLANK_SPACE + field + " ".repeat(padding) + BLANK_SPACE);
            }
            System.out.println(BAR_TABLE);
            if (rowIndex == 0) {
                System.out.println(separatorRow);
            }
            rowIndex++;
        }
    }

     /**
     * Calculates the maximum field lengths for each column in the provided list of lists of strings.
     *
     * @param records A list of lists of strings representing the rows and fields of the table
     * @return A list of integers containing the maximum field lengths for each column
     */
    public static List<Integer> getMaxFieldLengths(List<List<String>> records) {
        List<Integer> maxFieldLengths = new ArrayList<>();

        for (List<String> record : records) {
            for (int i = 0; i < record.size(); i++) {
                int fieldLength = getVisualLength(record.get(i));
                if (maxFieldLengths.size() <= i) {
                    maxFieldLengths.add(fieldLength);
                } else {
                    int maxLength = Math.max(maxFieldLengths.get(i), fieldLength);
                    maxFieldLengths.set(i, maxLength);
                }
            }
        }

        return maxFieldLengths;
    }

    /**
     * Calculates the visual length of a given string, considering Unicode characters.
     *
     * @param input The input string for which to calculate the visual length
     * @return The visual length of the input string
     */
    public static int getVisualLength(String input) {
        BreakIterator iterator = BreakIterator.getCharacterInstance();
        iterator.setText(input);
        int count = 0;
        while (iterator.next() != BreakIterator.DONE) {
            count++;
        }
        return count;
    }

    /**
     * Builds a separator row with dashes, based on the maximum field lengths provided.
     *
     * @param maxFieldLengths A list of integers representing the maximum field lengths for each column
     * @return A string representing the separator row with dashes
     */
    public static String buildSeparatorRow(List<Integer> maxFieldLengths) {
        StringBuilder separatorRow = new StringBuilder();

        for (int length : maxFieldLengths) {
            separatorRow.append(PLUS);
            for (int i = 0; i < length + 2; i++) {
                separatorRow.append(HYPHEN);
            }
        }
        separatorRow.append(PLUS);

        return separatorRow.toString();
    }
}