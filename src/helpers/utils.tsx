export function isValidEmail(email: string): boolean {
    // Enhanced regex for stricter validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Regular expression for special characters
    const invalidChars = /[\>\<\'\"\|\&\$]/g;

    // Check both regexes
    return emailRegex.test(email) && !invalidChars.test(email);
}
