//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
WScript.Echo("Should had a StackOverflow exception");
} catch (ex) { WScript.Echo(ex.message); }