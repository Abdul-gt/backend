import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const protect = (req: any, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) return res.status(401).json({ error: "No token provided" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'super_secret_key');
        req.user = decoded; // Attach user info to the request
        next();
    } catch (e) {
        res.status(401).json({ error: "Invalid token" });
    }
};