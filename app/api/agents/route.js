export async function GET(request) {
    const agents = [
        { fullName: 'James Bond', service: 'MI6' },
        { fullName: 'Fox Mulder', service: 'CIA' }
    ];

    return new Response(JSON.stringify(agents));
}
