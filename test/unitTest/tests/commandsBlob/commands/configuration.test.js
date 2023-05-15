'use strict';
/* eslint-disable no-undef */
/**
 * @file configuration.test.js
 * @module configuration.test
 * @description Unit tests for the configuration.js
 * @requires module:rulesLibrary
 * @requires module:configuration
 * @requires module:configurator
 * @requires module:testData/configuration
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Json Howard
 * @date 2023/05/08
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import rulesLibrary from "../../../../../src/businessRules/rulesLibrary.js";
import configuration from "../../../../../src/commandsBlob/commands/configuration";
import configurator from "../../../../../src/executrix/configurator.js";
import * as obj_con from '../../../testData/commandsBlob/commands/configuration';
import * as tst_con from '../../constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';

const { wrd, cfg } = hayConst;

/**
 * @function changeConfigurationSetting
 * @description Tests the positive and negative test cases of the changeConfigurationSetting
 * @author Json Howard
 * @date 2023/05/08
 */
describe(tst_con.cchangeConfigurationSetting, () => {
    /**
     * @function changeConfigurationSetting_validDataString
     * @description Tests the business rules function changeConfigurationSetting with a valid input.
     * @author Json Howard
     * @date 2023/05/08
     */
    test(tst_con.cchangeConfigurationSetting_validDataString, () => {
      // Arrange
      let inputData = ["TestCommandSequenceALL", "wrkflo"];
      let inputMetaData = "";
  
      // Act
      rulesLibrary.initRulesLibrary();
      let returnData = configuration.changeConfigurationSetting(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); //[true, "ERROR: Invalid entry, please enter a valid configuration namespace to change, and a value to assign to the configuration setting."]
    });

    /**
     * @function changeConfigurationSetting_inValidDataInputDataString
     * @description Tests the business rules function changeConfigurationSetting with a invalid string input.
     * @author Json Howard
     * @date 2023/05/08
     */
    test(tst_con.cchangeConfigurationSetting_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = "";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = configuration.changeConfigurationSetting(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy(); //[true, "ERROR: Invalid entry, please enter a valid configuration namespace to change, and a value to assign to the configuration setting."]
    });

    /**
     * @function changeConfigurationSetting_inValidInputDataInteger
     * @description Tests the business rules function changeConfigurationSetting with a invalid integer input.
     * @author Json Howard
     * @date 2023/05/08
     */
    test(tst_con.cchangeConfigurationSetting_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 4567;
        let inputMetaData = "123string321";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = configuration.changeConfigurationSetting(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy(); //[true, "ERROR: Invalid entry, please enter a valid configuration namespace to change, and a value to assign to the configuration setting."]
    });

    /**
     * @function changeConfigurationSetting_inValidInputDataBoolean
     * @description Tests the business rules function changeConfigurationSetting with a invalid boolean input.
     * @author Json Howard
     * @date 2023/05/08
     */
    test(tst_con.cchangeConfigurationSetting_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = "123string321";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = configuration.changeConfigurationSetting(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy(); //[true, "ERROR: Invalid entry, please enter a valid configuration namespace to change, and a value to assign to the configuration setting."]
    });

    /**
     * @function changeConfigurationSetting_inValidInputDataNaN
     * @description Tests the business rules function changeConfigurationSetting with a invalid NaN input.
     * @author Json Howard
     * @date 2023/05/08
     */
    test(tst_con.cchangeConfigurationSetting_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = "";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = configuration.changeConfigurationSetting(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy(); //[true, "ERROR: Invalid entry, please enter a valid configuration namespace to change, and a value to assign to the configuration setting."]
    });

    /**
     * @function changeConfigurationSetting_inValidInputDataUndefined
     * @description Tests the business rules function changeConfigurationSetting with a invalid undefined input.
     * @author Json Howard
     * @date 2023/05/08
     */
    test(tst_con.cchangeConfigurationSetting_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = "";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = configuration.changeConfigurationSetting(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy(); //[true, "ERROR: Invalid entry, please enter a valid configuration namespace to change, and a value to assign to the configuration setting."]
    });
});

/**
 * @function changeDebugConfigurationTheme
 * @description Tests the positive and negative test cases of the changeDebugConfigurationTheme
 * @date 2023/05/08
*/
describe(tst_con.cchangeDebugConfigurationTheme, () => {
  /**
   * @function changeDebugConfigurationTheme_validDataString
   * @description Tests the business rules function changeDebugConfigurationTheme with a valid input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cchangeDebugConfigurationTheme_validDataString, () => {
    // Arrange
    let inputData = ["TestCommandSequenceALL", "cmdSeq wrkflo"];
    let inputMetaData = "";

    // Act
    rulesLibrary.initRulesLibrary();
    configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkThemesPath, "/");
    let returnData = configuration.changeDebugConfigurationTheme(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); // [true, "ERROR: The specified theme name was not found in the current list of supported themes."]
  });

  /**
     * @function changeDebugConfigurationTheme_inValidDataInputDataString
     * @description Tests the business rules function changeDebugConfigurationTheme with a invalid string input.
     * @author Json Howard
     * @date 2023/05/08
     */
  test(tst_con.cchangeDebugConfigurationTheme_inValidDataInputDataString, () => {
    // Arrange
    let inputData = "dfxg24346dfg";
    let inputMetaData = "";

    // Act
    rulesLibrary.initRulesLibrary();
    configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkThemesPath, "/");
    let returnData = configuration.changeDebugConfigurationTheme(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //[true, "ERROR: Invalid entry, please enter a valid configuration namespace to change, and a value to assign to the configuration setting."]
  });

  /**
   * @function changeDebugConfigurationTheme_inValidInputDataInteger
   * @description Tests the business rules function changeDebugConfigurationTheme with a invalid integer input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cchangeDebugConfigurationTheme_inValidInputDataInteger, () => {
      // Arrange
      let inputData = 4567;
      let inputMetaData = "123string321";

      // Act
      rulesLibrary.initRulesLibrary();
      configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkThemesPath, "/");
      let returnData = configuration.changeDebugConfigurationTheme(
        inputData,
        inputMetaData
      );

      // Assert
      expect(returnData).toBeTruthy(); //[true, "ERROR: Invalid entry, please enter a valid configuration namespace to change, and a value to assign to the configuration setting."]
  });

  /**
   * @function changeDebugConfigurationTheme_inValidInputDataBoolean
   * @description Tests the business rules function changeDebugConfigurationTheme with a invalid boolean input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cchangeDebugConfigurationTheme_inValidInputDataBoolean, () => {
      // Arrange
      let inputData = false;
      let inputMetaData = "123string321";

      // Act
      rulesLibrary.initRulesLibrary();
      configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkThemesPath, "/");
      let returnData = configuration.changeDebugConfigurationTheme(
        inputData,
        inputMetaData
      );

      // Assert
      expect(returnData).toBeTruthy(); //[true, "ERROR: Invalid entry, please enter a valid configuration namespace to change, and a value to assign to the configuration setting."]
  });

  /**
   * @function changeDebugConfigurationTheme_inValidInputDataNaN
   * @description Tests the business rules function changeDebugConfigurationTheme with a invalid NaN input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cchangeDebugConfigurationTheme_inValidInputDataNaN, () => {
      // Arrange
      let inputData = NaN;
      let inputMetaData = "";

      // Act
      rulesLibrary.initRulesLibrary();
      configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkThemesPath, "/");
      let returnData = configuration.changeDebugConfigurationTheme(
        inputData,
        inputMetaData
      );

      // Assert
      expect(returnData).toBeTruthy(); //[true, "ERROR: Invalid entry, please enter a valid configuration namespace to change, and a value to assign to the configuration setting."]
  });

  /**
   * @function changeDebugConfigurationTheme_inValidInputDataUndefined
   * @description Tests the business rules function changeDebugConfigurationTheme with a invalid undefined input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cchangeDebugConfigurationTheme_inValidInputDataUndefined, () => {
      // Arrange
      let inputData = undefined;
      let inputMetaData = "";

      // Act
      rulesLibrary.initRulesLibrary();
      configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkThemesPath, "/");
      let returnData = configuration.changeDebugConfigurationTheme(
        inputData,
        inputMetaData
      );

      // Assert
      expect(returnData).toBeTruthy(); //[true, "ERROR: Invalid entry, please enter a valid configuration namespace to change, and a value to assign to the configuration setting."]
  });
});

/**
 * @function saveConfiguration
 * @description Tests the positive and negative test cases of the saveConfiguration
 * @date 2023/05/08
 */
describe(tst_con.csaveConfiguration, () => {
    /**
     * @function saveConfiguration_validDataString
     * @description Tests the business rules function saveConfiguration with a valid input.
     * @author Json Howard
     * @date 2023/05/08
     */
    test(tst_con.csaveConfiguration_validDataString, () => {
      // Arrange
      let inputData = ["TestCommandSequenceALL", "wrkflo"];
      let inputMetaData = "";
      let testPath = obj_con.testConfigPath();
  
      // Act
      rulesLibrary.initRulesLibrary();
      configurator.setConfigurationSetting(wrd.csystem, cfg.cappConfigPath, testPath);
      let returnData = configuration.saveConfiguration(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); //[true, true]
    });
});

/**
 * @function listConfigurationThemes
 * @description Tests the positive and negative test cases of the listConfigurationThemes
 * @date 2023/05/08
 */

describe(tst_con.clistConfigurationThemes, () => {
  /**
   * @function listConfigurationThemes_validDataString
   * @description Tests the business rules function listConfigurationThemes with a valid input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.clistConfigurationThemes_validDataString, () => {
    // Arrange
    let inputData = "";
    let inputMetaData = "";

    // Act
    rulesLibrary.initRulesLibrary();
    let returnData = configuration.listConfigurationThemes(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //[true, true]
  });
});
