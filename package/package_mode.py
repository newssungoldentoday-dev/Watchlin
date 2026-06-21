# package_mode.py - Backend Profile & Mode Processing Logic

import json

def get_profile_settings(profile_type):
    """
    Returns specific configurations based on the selected age profile.
    Integrates with package_details.json data.
    """
    profiles = {
        "kids": {
            "mode": "child_safe",
            "screen_brightness": 30,
            "heart_rate_monitor": False,
            "step_goal": 2000,
            "allow_notifications": False
        },
        "young": {
            "mode": "active",
            "screen_brightness": 50,
            "heart_rate_monitor": True,
            "step_goal": 5000,
            "allow_notifications": True
        },
        "teen": {
            "mode": "standard",
            "screen_brightness": 70,
            "heart_rate_monitor": True,
            "step_goal": 8000,
            "allow_notifications": True
        },
        "adult": {
            "mode": "performance",
            "screen_brightness": 100,
            "heart_rate_monitor": True,
            "step_goal": 10000,
            "allow_notifications": True
        },
        "elder": {
            "mode": "accessibility",
            "screen_brightness": 100,
            "heart_rate_monitor": True,
            "step_goal": 3000,
            "allow_notifications": False,
            "large_fonts": True
        }
    }
    
    # Return profile if it exists, otherwise default to adult
    return profiles.get(profile_type.lower(), profiles["adult"])

if __name__ == "__main__":
    # Test script execution to verify profile processing logic
    test_profile = "elder"
    print(f"Generating settings for: {test_profile}")
    result = get_profile_settings(test_profile)
    print(json.dumps(result, indent=4))
  
