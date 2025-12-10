/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2025 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.

 **************************************************************************/
/**
 * Background color for the output image
 */
export type BackgroundColor = {
    red: number;
    green: number;
    blue: number;
    alpha: number;
};

/**
 * Image source for v2 API
 */
export type ImageSource = {
    url: string;
};

/**
 * Image input for v2 API
 */
export type ImageInput = {
    source: ImageSource;
};

/**
 * Output configuration for v2 API
 */
export type RemoveBackgroundOutput = {
    mediaType: string;
};

/**
 * Remove Background Request for v2 API
 * Isolate subject of interest in an image and remove background.
 */
export type RemoveBackgroundRequest = {
    image: ImageInput;
    mode: "cutout";
    output: RemoveBackgroundOutput;
    trim?: boolean;
    backgroundColor?: BackgroundColor;
    colorDecontamination?: number;
};
