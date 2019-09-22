import React from 'react';
import {goToExercisePage} from "./navigation";

describe("how user go to exercise page", () => {
  const EXECISE_1_NAME = "EXERCISE 1"
  it('should give exercise page when the user ask for it', () => {
    const exercisePageName = goToExercisePage()
    expect(exercisePageName).toEqual(EXECISE_1_NAME)
  });
})
