//
//  SampleFile.m
//  NativeiOSToReactNativeCommunication
//
//  Created by Raju on 12/19/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "SampleFile.h"
#import <React/RCTLog.h>



@implementation SampleFile


RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(showImage:(NSString *)url )
{
  // Here's our method's code
  
  
  RCTLogInfo(@"showImage with url %@", url);
  // Create image info
}

@end
